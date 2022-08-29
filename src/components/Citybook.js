import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AformContext } from "./Ucontext";

function Citybook() {
    const { _, Achange } = useContext(AformContext);
    const Navigate = useNavigate()
    return (
        <>
            <div className="col-6">
                <h4>Anacab City Taxi Booking</h4>
                <form onSubmit={() => { Navigate("/cityverify") }} autoComplete="off">
                    <div className="row">
                        <label htmlFor="pickup"><b>Pickup Location:</b></label>
                        <input style={{ width: 450 }} id="pickup" type="text" placeholder="Enter your Location" name="from" className="form-control"
                            onChange={Achange} required="required" />
                        <label htmlFor="drop"><b>Drop Location:</b></label>
                        <input style={{ width: 450 }} id="drop" type="text" placeholder="Enter your Location" name="to" className="form-control"
                            onChange={Achange} required="required" />
                        <label htmlFor="time"><b>Time:</b></label>
                        <input style={{ width: 350 }} id="time" type="time" name="time" className="form-control"
                            onChange={Achange} required="required" />
                        <label htmlFor="date"><b>Date:</b></label>
                        <input style={{ width: 350 }} id="date" type="date" name="date" className="form-control"
                            onChange={Achange} required="required" />
                    </div>
                    <div className="d-flex flex-column ">
                        <div><img src="./images/ic_prime.png" /></div>
                    </div>
                    <button type="submit" className="btn btn-outline-success">Next</button>
                </form>
            </div>
            <div className="col-6">
                <img src="./images/citytaxi11.jpg" />
            </div>
        </>
    );
}

export default Citybook;