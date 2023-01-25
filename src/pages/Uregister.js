import React, { useState } from "react";
import Homefooter from "../components/Homefooter";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import swal from "sweetalert2";

const formInitial = {
    fname: "",
    email: "",
    password: "",
    cpassword: "",
    pnumber: "",
}

function Uregister() {
    const Navigate = useNavigate()
    const [Reg, setReg] = useState(formInitial)
    const [Loading, setLoading] = useState(false)
    const [Res, setRes] = ""

    function Uchange({ target: { value, name } }) {
        setReg({ ...Reg, [name]: value })
    }

    async function creatuser() {
        try {
            const { data } = await axios.post("https://anacabs-backend.vercel.app/api/auth/register", Reg)

        } catch ({ response: { data } }) {
            alert(data.error)
        }
    }

    function Sweet() {
        swal.fire({
            text: `Verify your mail Check your account`,
            icon: "success",
        }).then(() => {
            Navigate("/login", { replace: true });
        })
    }

    function Usubmit(event) {
        event.preventDefault();
        creatuser()
        Sweet()
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-4 col-md-0 col-sm-0">
                        <img src="./images/anagif.gif" />
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title text-center"><img src="./images/welcome1.gif" /></div>
                                <form onSubmit={Usubmit}>
                                    <div className="form-group m-1">
                                        <label htmlFor="fname">Full Name:</label>
                                        <input id="fname" name="fname" type="text" className="form-control p-1" placeholder="Enter the full name"
                                            onChange={Uchange} required="required" />
                                    </div>
                                    <div className="form-group m-1">
                                        <label htmlFor="uname">Email:</label>
                                        <input id="email" name="email" type="email" className="form-control p-1" placeholder="Enter the your email"
                                            onChange={Uchange} required="required" />
                                    </div>
                                    <div className="form-group m-1">
                                        <label htmlFor="password">Password:</label>
                                        <input id="password" name="password" type="password" className="form-control p-1" placeholder="Enter the password"
                                            onChange={Uchange} required="required" />
                                    </div>
                                    <div className="form-group m-1">
                                        <label htmlFor="cpassword">Comfirm Password:</label>
                                        <input id="cpassword" type="password" name="cpassword" className="form-control p-1" placeholder="Comfirm password"
                                            onChange={Uchange} required="required" />

                                    </div>
                                    <div className="form-group m-1">
                                        <label htmlFor="phone">Phone Number:</label>
                                        <input id="phone" type="tel" name="pnumber" className="form-control p-1" placeholder="Enter the phone number"
                                            onChange={Uchange} required="required" />
                                    </div>
                                    <div className="form-group m-1">
                                        <button type="submit" className="btn btn-outline-success m-2" >Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <br />
            <Homefooter />
        </>
    );
}

export default Uregister;