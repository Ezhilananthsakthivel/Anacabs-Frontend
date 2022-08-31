import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Btable() {
    const Navigate = useNavigate();
    const [loading, setloading] = useState(true)
    const [orders, setorders] = useState([])
    let count = 0
    const Aauth = window.localStorage.getItem("Aauth")
    
    async function getorders() {
        try {
            const { data } = await axios.get("https://anacabs.herokuapp.com/api/bookings", {
                headers: {
                    "Authorization": `Bearer ${Aauth}`
                }
            });
            setloading(false)
            setorders(data);
        } catch ({ response: { data, status } }) {
            if (status == "403" || status == "401") {
                window.localStorage.clear();
                Navigate("/alogin", { replace: true })
            }
            else {
                alert(data.error)
            }
        }
    }

    useEffect(() => {
        getorders();
    }, []);

    return (
        <>
            <div className="container-fulid">
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
                                    <th>Phone Number</th>
                                    <th>Driver</th>
                                    <th>Ststus</th>
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
                                            <td>{o.pnumber}</td>
                                            <td>{o.did}</td>
                                            <td>{o.status}</td>
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

export default Btable;