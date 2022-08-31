import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Homefooter from "../components/Homefooter";
import Navbar from "../components/Navbar";

function Alogin() {
    const Navigate = useNavigate()
    const initialform = {
        uname: "",
        password: ""
    }
    const [Alog, setAlog] = useState(initialform)

    function Alogchange({ target: { value, name } }) {
        setAlog({ ...Alog, [name]: value })
    }

    async function ahome() {
        try {
            const { data: { authToken } } = await axios.post("https://anacabs.herokuapp.com/api/auth/alogin", Alog)
            window.localStorage.setItem("Aauth", authToken)
            Navigate("/ahome", { replace: true })
        } catch ({ response: { data } }) {
            alert(data.error)
        }
    }
    function Alogsubmit(event) {
        event.preventDefault();
        ahome();
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <p>Use this UserName and Password</p>
                        <p>User Name:sakthivel{" "}
                            Password:sakthivelsa</p>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title text-center">LOGIN </h4>
                                <hr />
                                <form onSubmit={Alogsubmit}>
                                    <div className="form-group">
                                        <label htmlFor="uname">User Name</label>
                                        <input id="uname" type="text" className="form-control" placeholder="Enter your user name" name="uname"
                                            onChange={Alogchange} required="required" />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password" className="form-control" placeholder="Enter your password" name="password"
                                            onChange={Alogchange} required="required" />
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
                        <img height={350} width={550} src="./images/adminhome.jpg" />
                    </div>
                </div>
            </div>
            <br />
            <Homefooter />
        </>
    );
}

export default Alogin;