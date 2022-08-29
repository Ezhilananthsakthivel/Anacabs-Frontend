import React, { useState } from "react";
import Homefooter from "../components/Homefooter";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import swal from "sweetalert2";

const formInitial = {
    fname: "",
    uname: "",
    password: "",
    cpassword: "",
    pnumber: ""
}
function Uregister() {
    const Navigate = useNavigate()
    const [Reg, setReg] = useState(formInitial)
    function Uchange({ target: { value, name } }) {
        setReg({ ...Reg, [name]: value })
    }
    const creatuser = async () => {
        try {
            const { data } = await axios.post("http://localhost:3001/api/auth/register", Reg)
            Sweet()
        } catch ({ response: { data } }) {
            alert(data.error)
        }
    }
    function Usubmit(event) {
        event.preventDefault();
        creatuser()
    }
    function Sweet() {
        swal.fire({
            text: `Start Booking Your Rides`,
            icon: "success",
        }).then(() => {
            Navigate("/login", { replace: true });
        })
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src="./images/anagif.gif" />
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title text-center"><img src="./images/welcome1.gif" /></div>
                                <form onSubmit={Usubmit} autoComplete={"off"}>
                                    <div className="form-group">
                                        <label htmlFor="fname">Full Name:</label>
                                        <input id="fname" name="fname" type="text" className="form-control" placeholder="Enter the full name"
                                            onChange={Uchange} required="required" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="uname">User Name:</label>
                                        <input id="uname" name="uname" type="text" className="form-control" placeholder="Enter the user name"
                                            onChange={Uchange} required="required" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input id="password" name="password" type="password" className="form-control" placeholder="Enter the password"
                                            onChange={Uchange} required="required" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cpassword">Comfirm Password:</label>
                                        <input id="cpassword" type="password" name="cpassword" className="form-control" placeholder="Comfirm password"
                                            onChange={Uchange} required="required" />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number:</label>
                                        <input id="phone" type="tel" name="pnumber" className="form-control" placeholder="Enter the phone number"
                                            onChange={Uchange} required="required" />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-outline-success" >Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
            <br />
            <Homefooter />
        </>
    );
}

export default Uregister;