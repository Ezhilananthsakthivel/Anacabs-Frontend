import React from "react";
import { Link } from "react-router-dom";
import Dnav from "../components/Dnav";
import Homefooter from "../components/Homefooter";


function Dhome() {
    return (
        <>
            <Dnav />
            <div className="container">
                <div className="row">
                    <div className="col-3" style={{ paddingTop: 70 }}>
                        <Link to={"/dorders"} className="card" style={{ width: "13rem" }}>
                            <img height={150} src="./images/driver.gif" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center"><b>Orders</b></p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3" style={{ paddingTop: 70 }}>
                        <Link to={"/dhistory"} className="card" style={{ width: "13rem" }}>
                            <img height={150} src="./images/dhistory3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center"><b>My Orders</b></p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6">
                        <img src="./images/dhome1.webp" />
                    </div>
                </div>
            </div>
            <br />
            <Homefooter />
        </>
    );
}

export default Dhome;