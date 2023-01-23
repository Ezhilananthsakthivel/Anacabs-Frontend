import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Dtable() {
    const Navigate = useNavigate()
    const [loading, setloading] = useState(true)
    const [drivers, setdrivers] = useState([])
    let count = 0
    const Aauth = window.localStorage.getItem("Aauth")

    async function getdrivers() {
        try {
            const { data } = await axios.get("https://anacabs-backend.vercel.app/api/drivers", {
                headers: {
                    "Authorization": `Bearer ${Aauth}`
                }
            });
            setloading(false)
            setdrivers(data);
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

    async function Ddelete(d) {
        try {
            if (window.confirm(`Delete ${d.uname}`)) {
                const { data } = await axios.delete(`https://anacabs.herokuapp.com/api/drivers/${d._id}`, {
                    headers: {
                        "Authorization": `Bearer ${Aauth}`
                    }
                });
                getdrivers()
            }
        } catch ({ response: { data, status } }) {
<<<<<<< HEAD
            if (status.includes("403")) {
                window.localStorage.clear();
                Navigate("/alogin", { replace: true })
            }
            else {
                alert(data.error)
            }
        }
    }
    async function Dedit(d) {
        try {
            const { data } = await axios.put(`https://anacabs-backend.vercel.app/api/drivers/${d._id}`, {
                headers: {
                    "Authorization": `Bearer ${Aauth}`
                }
            })
        } catch ({ response: { data, status } }) {
            if (status.includes("403")) {
=======
            if (status == "403" || status == "401") {
>>>>>>> 6cacd21ebda298ff15c07979879184385a795d97
                window.localStorage.clear();
                Navigate("/alogin", { replace: true })
            }
            else {
                alert(data.error)
            }
        }
    }

    // async function Dedit(d) {
    //     try {
    //         const { data } = await axios.put(`https://anacabs.herokuapp.com/api/drivers/${d._id}`, {
    //             headers: {
    //                 "Authorization": `Bearer ${Aauth}`
    //             }
    //         })
    //     } catch ({ response: { data, status } }) {
    //         if (status == "403" || status == "401") {
    //             window.localStorage.clear();
    //             Navigate("/alogin", { replace: true })
    //         }
    //         else {
    //             alert(data.error)
    //         }
    //     }
    // }

    useEffect(() => {
        getdrivers();
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
                                    <th>Car Number</th>
                                    <th>Name</th>
                                    <th>User Name</th>
                                    <th>Phone Number</th>
                                    <th>Driving Licence</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {drivers.map((d) => {
                                    return (
                                        <tr key={d._id} onClick={() => Navigate("/drivers/orders", { state: { uname: d.uname } })}>
                                            <td>{++count}</td>
                                            <td>{d.cnumber}</td>
                                            <td>{d.fname}</td>
                                            <td>{d.uname}</td>
                                            <td>{d.pnumber}</td>
                                            <td>{d.dlicence}</td>
                                            <td><button className="btn btn-outline-secondary" onClick={() => Ddelete(d)}>Delete</button></td>
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

export default Dtable;