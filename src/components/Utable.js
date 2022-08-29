import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Utable() {
    const Navigate = useNavigate()
    const [loading, setloading] = useState(true)
    const [users, setusers] = useState([])
    let count = 0
    const Aauth = window.localStorage.getItem("Aauth")

    async function getusers() {
        try {
            const { data } = await axios.get("http://localhost:3001/api/users", {
                headers: {
                    "Authorization": `Bearer ${Aauth}`
                }
            });
            setusers(data);
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
    async function udelete(u) {
        try {
            if (window.confirm(`Delete ${u.uname}`)) {
                const { data } = await axios.delete(`http://localhost:3001/api/users/${u._id}`, {
                    headers: {
                        "Authorization": `Bearer ${Aauth}`
                    }
                });
                getusers()
            }
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
        getusers();
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
                                    <th>Name</th>
                                    <th>User Name</th>
                                    <th>Phone Number</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((u) => {
                                    return (
                                        <tr key={u._id} onClick={() => Navigate("/users/orders", { state: { uname: u.uname } })}>
                                            <td>{++count}</td>
                                            <td>{u.fname}</td>
                                            <td>{u.uname}</td>
                                            <td>{u.pnumber}</td>
                                            <td><button className="btn btn-outline-secondary" onClick={() => udelete(u)}>Delete</button></td>
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

export default Utable