import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert2';
import { AformContext } from "./Ucontext"
import axios from "axios";

function Cityvar() {
    const { Aform, Achange } = useContext(AformContext)
    const Navigate = useNavigate()
    const Uauth = window.localStorage.getItem("Uauth")

    async function Asubmit(event) {
        try {
            event.preventDefault();
            const { data } = await axios.post("https://anacabs-backend.vercel.app/api/bookings", Aform, {
                headers: {
                    "Authorization": `Bearer ${Uauth}`
                }
            })
            Sweet()
        } catch ({ response: { data, status } }) {
            if (status == "403" || status == "401") {
                window.localStorage.clear();
                Navigate("/", { replace: true })
            }
            else {
                alert(data.error)
            }
        }
    }

    async function otp() {
        try {
            const { data } = await axios.post("https://anacabs-backend.vercel.app/api/bookings/otp", { pnumber: Aform.pnumber }, {
                headers: {
                    "Authorization": `Bearer ${Uauth}`
                }
            })
            console.log(data)
            if (data) {
                swal.fire({
                    text: { data },
                    icon: "success",
                })
            }
        } catch ({ response: { data, status } }) {
            if (status == "403" || status == "401") {
                window.localStorage.clear();
                Navigate("/", { replace: true })
            }
            else {
                alert(data.error)
            }
        }
    }

    function Sweet() {
        swal.fire({
            text: `You order is confirmed!
            Our driver will call you`,
            icon: "success",
        }).then(() => {
            Navigate("/mybookings", { replace: true });
        })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h4>Anacab City Taxi Booking</h4>
                        <form onSubmit={Asubmit} >
                            <div className="form-group">
                                <label htmlFor="from" className="form-label"><b>From:</b></label>
                                <input style={{ width: 400 }} className="form-control" type="text" id="from" name="from"
                                    value={Aform.from} readOnly={true} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="from" className="form-label"><b>To:</b></label>
                                <input style={{ width: 400 }} className="form-control" type="text" id="from" name="to"
                                    value={Aform.to} readOnly={true} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone"> <b>Phone Number:</b></label>
                                <input style={{ width: 400 }} id="Phone" type="tel" className="form-control" name="pnumber" placeholder="Enter Your Phone Number"
                                    onChange={Achange} required="required" />
                            </div>
                            <br />
                            <div style={{ display: "flex" }}>
                                <button className="btn btn-outline-success" onClick={otp}>Send OTP</button>{" "}
                                <input style={{ width: 300 }} id="OTP" type="number" name="otp" className="form-control" placeholder="Enter the OTP"
                                    onChange={Achange} />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-outline-success" >Confirm Your Cab</button>
                        </form>
                    </div>
                    <div className="col-7">
                        <img src="./images/citytaxi11.jpg" />
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default Cityvar;