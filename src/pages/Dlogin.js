import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Homefooter from "../components/Homefooter";
import Navbar from "../components/Navbar";

function Dlogin() {
    const Navigate = useNavigate()
    const initialform = {
        uname: "",
        password: ""
    }
    const [Dlog, setDlog] = useState(initialform)

    function Dlogchange({ target: { value, name } }) {
        setDlog({ ...Dlog, [name]: value })
    }
    async function dhome() {
        try {
            const { data: { authToken } } = await axios.post("http://localhost:3001/api/auth/dlogin", Dlog)
            window.localStorage.setItem("Dauth", authToken)
            Navigate("/dhome", { replace: true })
        } catch ({ response: { data } }) {
            alert(data.error)
        }
    }
    function Dlogsubmit(event) {
        event.preventDefault();
        dhome();
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <p>Use this UserName and Password</p>
                        <p>User Name:sakthi{" "}
                            Password:sakthisa</p>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title text-center">LOGIN </h4>
                                <hr />
                                <form onSubmit={Dlogsubmit}>
                                    <div className="form-group">
                                        <label htmlFor="uname">User Name</label>
                                        <input id="uname" type="text" className="form-control" placeholder="Enter your user name" name="uname"
                                            onChange={Dlogchange} required="required" />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password" className="form-control" placeholder="Enter your password" name="password"
                                            onChange={Dlogchange} required="required" />
                                        <br />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-outline-success">Login</button >
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img height={390} src="./images/driverhome.jpg" />
                    </div>
                </div>
            </div>
            <br />
            <Homefooter />
        </>
    );
}

export default Dlogin;