import React from "react";
import Citybook from "../components/Citybook";
import Homefooter from "../components/Homefooter";
import Navbar from "../components/Navbar";

function Citytaxi() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <Citybook />
                </div>
            </div><br /><br />
            <Homefooter />
        </>
    )
}

export default Citytaxi