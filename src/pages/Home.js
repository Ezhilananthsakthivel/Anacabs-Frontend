import React from "react";
import { useNavigate } from "react-router-dom"
import Bannerhome from "../components/Bannerhome";
import Homeadd from "../components/Homeadd";
import Homefooter from "../components/Homefooter";
import Homeride from "../components/Homeride";
import Homevehicles from "../components/Homevehicles";

function Home() {
    const navigate = useNavigate()
    const atoken = window.localStorage.getItem("Aauth")
    const dtoken = window.localStorage.getItem("Dauth")
    const utoken = window.localStorage.getItem("Uauth")

    function admin() {
        if (atoken)
            navigate("/ahome")
        else
            navigate("/alogin")
    }

    function driver() {
        if (dtoken)
            navigate("/dhome")
        else
            navigate("/dlogin")
    }

    function user() {
        if (utoken)
            navigate("/citytaxi")
        else
            navigate("/login")
    }

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
                                {/* <button className="btn btn-outline-success"
                                    onClick={admin} >Admin</button>{" "}
                                <button className="btn btn-outline-success"
                                    onClick={driver}>Driver</button>{" "} */}
                                <button className="btn btn-outline-success"
                                    onClick={user}>Book Now</button>
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