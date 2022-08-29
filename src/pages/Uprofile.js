import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Homefooter from "../components/Homefooter";
import Navbar from "../components/Navbar";

function Uprofile() {
    const [user, setuser] = useState({})
    const [Read, setRead] = useState(true)
    const Navigate = useNavigate()
    const Uauth = window.localStorage.getItem("Uauth")

    async function profile() {
        try {
            const { data } = await axios.get("http://localhost:3001/api/users/myprofile", {
                headers: {
                    "Authorization": `Bearer ${Uauth}`
                }
            })
            setuser(data);
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
        profile();
    }, [])

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src="./images/profile.png" />
                    </div>
                    <div className="col-5">
                        <form autoComplete={"off"}>
                            <h4 className="text-center">User Profile</h4>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="fname">Full Name:</label>
                                <input id="fname" name="fname" type="text" className="form-control" placeholder="Enter the full name"
                                    value={user.fname} required="required" disabled={Read} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="uname">User Name:</label>
                                <input id="uname" name="uname" type="text" className="form-control" placeholder="Enter the user name"
                                    value={user.uname} required="required" disabled={true} />
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input id="password" name="password" type="password" className="form-control" placeholder="Enter the password"
                                    onChange={Uchange} required="required" />
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number:</label>
                                <input id="phone" type="tel" name="pnumber" className="form-control" placeholder="Enter the phone number"
                                    value={user.pnumber} required="required" disabled={Read} />
                            </div>
                            <br />
                            {!Read &&
                                <div className="form-group">
                                    <button type="submit" className="btn btn-outline-success" >Update</button>
                                </div>
                            }
                        </form>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-outline-success" onClick={() => setRead(false)}>Edit</button>
                    </div>
                </div>
            </div>
            <br /><br />
            <Homefooter />
        </>
    )
}

export default Uprofile