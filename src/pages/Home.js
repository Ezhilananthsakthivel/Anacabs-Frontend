import React from "react";
import { Link } from "react-router-dom"
import Bannerhome from "../components/Bannerhome";
import Homeadd from "../components/Homeadd";
import Homefooter from "../components/Homefooter";
import Homeride from "../components/Homeride";
import Homevehicles from "../components/Homevehicles";

function Home() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="navbar-brand">
                        <img src="./images/logo.jpg" width="80px" height="50px" />
                    </div>
                    <div>
                        <p style={{ fontSize: "larger", fontWeight: 900 }}>Ana Cabs Point</p>
                    </div>
                    <div>
                        <form className="d-flex">
                            <div>
                                <Link className="btn btn-outline-success"
                                    to={"/alogin"}>Admin</Link>{" "}
                                <Link className="btn btn-outline-success"
                                    to={"/dlogin"}>Driver</Link>{" "}
                                <Link className="btn btn-outline-success"
                                    to={"/login"}>Book Now</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            <Bannerhome />
            <Homeride />
            <Homeadd />
            <Homevehicles />
            <Homefooter />
        </>
    )
}

export default Home