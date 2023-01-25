import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import swal from "sweetalert2";
import Homefooter from "../components/Homefooter";
import Anav from "../components/Anav";

const formInitial = {
    fname: "",
    uname: "",
    password: "",
    cpassword: "",
    pnumber: "",
    dlicence: "",
    cnumber: "",
}

function Dregister() {
    const Navigate = useNavigate()
    const [Reg, setReg] = useState(formInitial)
    function Regchange({ target: { value, name } }) {
        setReg({ ...Reg, [name]: value })
    }
    const Aauth = window.localStorage.getItem("Aauth")
    const creatdriver = async () => {
        try {
            const { data } = await axios.post("http://localhost:3001/api/drivers/register", Reg, {
                headers: {
                    "Authorization": `Bearer ${Aauth}`
                }
            })
            Sweet()
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
    function Regsubmit(event) {
        event.preventDefault();
        creatdriver()
    }
    function Sweet() {
        swal.fire({
            text: `Driver Created`,
            icon: "success",
        }).then(() => {
            Navigate("/drivers", { replace: true });
        })
    }
    return (
        <>
            <Anav />
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">Add new Driver</h3>
                                <hr />
                                <form onSubmit={Regsubmit}>
                                    <div className="form-group">
                                        <label htmlFor="fname">Full Name:</label>
                                        <input id="fname" name="fname" type="text" className="form-control" placeholder="Enter the full name"
                                            onChange={Regchange} required="required" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="uname">User Name:</label>
                                        <input id="uname" name="uname" type="text" className="form-control" placeholder="Enter the user name"
                                            onChange={Regchange} required="required" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input id="password" name="password" type="password" className="form-control" placeholder="Enter the password"
                                            onChange={Regchange} required="required" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cpassword">Comfirm Password:</label>
                                        <input id="cpassword" type="password" name="cpassword" className="form-control" placeholder="Comfirm password"
                                            onChange={Regchange} required="required" />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number:</label>
                                        <input id="phone" type="tel" name="pnumber" className="form-control" placeholder="Enter the phone number"
                                            onChange={Regchange} required="required" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dlicence">Driving Licence:</label>
                                        <input id="dlicence" type="text" name="dlicence" className="form-control" placeholder="Enter the driving licence number"
                                            onChange={Regchange} required="required" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cnumber">Car Number:</label>
                                        <input id="cnumber" type="text" name="cnumber" className="form-control" placeholder="Enter the car number"
                                            onChange={Regchange} required="required" />
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

export default Dregister;
