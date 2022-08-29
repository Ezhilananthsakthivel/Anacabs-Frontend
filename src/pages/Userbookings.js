import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"

function Userbookings() {
    const Navigate = useNavigate()
    const { state } = useLocation()
    const [orders, setorders] = useState([])
    let count = 0
    const Aauth = window.localStorage.getItem("Aauth")

    async function getorders() {
        try {
            const { data } = await axios.post("http://localhost:3001/api/bookings/userorders", { uname: state.uname }, {
                headers: {
                    "Authorization": `Bearer ${Aauth}`
                }
            });
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
                                    <th>Status</th>
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
                                            <td>{o.status}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default Userbookings;