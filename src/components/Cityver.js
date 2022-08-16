import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert2';
import { AformContext } from "./Ucontext"
import axios from "axios";

function Cityvar() {
    const { Aform, Achange } = useContext(AformContext)
    const Navigate = useNavigate()

    async function Asubmit(event) {
        try {
            event.preventDefault();
            const { data } = await axios.post("https://anacabs.herokuapp.com/api/bookings", Aform)
            Sweet()
        } catch ({ response: { data } }) {
            alert(data.error)
        }
    }

    function Sweet() {
        swal.fire({
            text: `You order is confirmed!
            Our driver will call you`,
            icon: "success",
        })
            .then(() => {
                Navigate("/", { replace: true });
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
                                <Link className="btn btn-outline-success" to="">Send OTP</Link>{" "}
                                <input style={{ width: 300 }} id="OTP" type="tel" className="form-control" placeholder="Enter the OTP" required="required" />
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