import React from "react";
import { Link } from "react-router-dom";
import Anav from "../components/Anav";
import Homefooter from "../components/Homefooter";

function Ahome() {
    return (
        <div style={{ backgroundColor: "#e9ecef" }}>
            <Anav />
            <div className="container-fuild">
                <div className="row">
                    <div className="col-4"><img height={400} width={400} src="./images/ahome.jpg" /></div>
                    <div className="col-2" style={{ paddingTop: 60, padding: 20 }}>
                        <Link to={"/drivers"} className="card" style={{ width: "12rem" }}>
                            <img src="./images/adriver.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center">Drivers</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-2" style={{ paddingTop: 60, padding: 20 }}>
                        <Link to={"/bookings"} className="card" style={{ width: "12rem" }}>
                            <img src="./images/ahome2.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center">Bookings</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-2" style={{ paddingTop: 60, padding: 20 }}>
                        <Link to={"/dregister"} className="card" style={{ width: "12rem" }}>
                            <img src="./images/add driver.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center">Add New Driver</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-2" style={{ paddingTop: 60, padding: 20 }}>
                        <Link to={"/users"} className="card" style={{ width: "12rem" }}>
                            <img src="./images/adminusers.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center">Users</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <Homefooter />
        </div>
    );
}

export default Ahome;