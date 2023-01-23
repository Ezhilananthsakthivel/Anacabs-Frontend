import React from "react";
import Citybook from "../components/Citybook";
import Homefooter from "../components/Homefooter";
import Unav from "../components/Unav";

function Citytaxi() {
    return (
        <>
            <Unav />
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