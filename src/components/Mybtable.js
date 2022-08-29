import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

function Mybtable() {
    const [bookings, setbookings] = useState([])
    const [loading, setloading] = useState(true)
    const Navigate = useNavigate()
    let count = 0
    const Uauth = window.localStorage.getItem("Uauth")

    async function Ubookings() {
        try {
            const { data } = await axios.get("http://localhost:3001/api/bookings/ubookings", {
                headers: {
                    "Authorization": `Bearer ${Uauth}`
                }
            })
            setloading(false)
            setbookings(data);
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
        Ubookings();
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
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Phone Number</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((b) => {
                                    return (
                                        <tr key={b._id}>
                                            <td>{++count}</td>
                                            <td>{b.date}</td>
                                            <td>{b.time}</td>
                                            <td>{b.from}</td>
                                            <td>{b.to}</td>
                                            <td>{b.pnumber}</td>
                                            <td>{b.status}</td>
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

export default Mybtable;