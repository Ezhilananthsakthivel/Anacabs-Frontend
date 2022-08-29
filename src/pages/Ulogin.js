import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Homefooter from "../components/Homefooter";
import Navbar from "../components/Navbar";

function Ulogin() {
    const Navigate = useNavigate()
    const initialform = {
        uname: "",
        password: ""
    }
    const [Ulog, setUlog] = useState(initialform)
    function Ulogchange({ target: { value, name } }) {
        setUlog({ ...Ulog, [name]: value })
    }
    async function book() {
        try {
            const { data: { authToken } } = await axios.post("http://localhost:3001/api/auth/login", Ulog)
            window.localStorage.setItem("Uauth", authToken)
            Navigate("/citytaxi", { replace: true })
        } catch ({ response: { data } }) {
            alert(data.error)
        }
    }
    function Ulogsubmit(event) {
        event.preventDefault()
        book()
    }
    return (
        <>
            <Navbar />
            <div className="container" style={{ paddingBottom: 20 }}>
                <div className="row">
                    <div className="col-7">
                        <img src="./images/ulogin.gif" />
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title text-center">User LogIn </h4>
                                <hr />
                                <form onSubmit={Ulogsubmit}>
                                    <div className="form-group">
                                        <label htmlFor="uname">User Name</label>
                                        <input id="uname" type="text" className="form-control" placeholder="Enter your user name" name="uname"
                                            onChange={Ulogchange} required="required" />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password" className="form-control" placeholder="Enter your password" name="password"
                                            onChange={Ulogchange} required="required" />
                                        <br />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-outline-success">Login</button >
                                    </div>
                                    <br />
                                    <p>Don't have an account? <Link to={"/register"}>Register Here..</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Homefooter />
        </>
    );
}

export default Ulogin;