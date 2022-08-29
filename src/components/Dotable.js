import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Dotable() {
    const [loading, setloading] = useState(true)
    const [orders, setorders] = useState([])
    let count = 0
    const Navigate = useNavigate();
    const Dauth = window.localStorage.getItem("Dauth")
    async function getDorders() {
        try {
            const { data } = await axios.get("http://localhost:3001/api/bookings/porders", {
                headers: {
                    "Authorization": `Bearer ${Dauth}`
                }
            });
            setorders(data);
            setloading(false)
        } catch ({ response: { data, status } }) {
            if (status == "403" || status == "401") {
                window.localStorage.clear();
                Navigate("/dlogin", { replace: true })
            }
            else {
                alert(data.error)
            }
        }
    }
    async function Ordershistory(Order) {
        try {
            const { data } = await axios.put(`http://localhost:3001/api/bookings/didput/${Order._id}`, Order, {
                headers: {
                    "Authorization": `Bearer ${Dauth}`
                }
            });
            getDorders()
            Navigate("/dhistory")
        } catch ({ response: { data, status } }) {
            if (status == "403" || status == "401") {
                window.localStorage.clear();
                Navigate("/dlogin", { replace: true })
            }
            else {
                alert(data.error)
            }
        }
    }
    useEffect(() => {
        getDorders();
    }, []);
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((o) => {
                                    return (
                                        <tr key={o._id}>
                                            <td>{++count}</td>
                                            <td>{o.time}</td>
                                            <td>{o.date}</td>
                                            <td>{o.from}</td>
                                            <td>{o.to}</td>
                                            <td><button className="btn btn-outline-primary" onClick={() => {
                                                Ordershistory(o)
                                            }}>Accept</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        {loading &&
                            <div className="d-flex justify-content-center">
                                <img src="./images/loading.gif" />
                            </div>
                        }
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default Dotable;