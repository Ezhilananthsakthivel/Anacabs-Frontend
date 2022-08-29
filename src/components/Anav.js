import React from "react";
import { useNavigate, Link } from "react-router-dom"

function Anav() {
    const Navigate = useNavigate();
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
                                <button className="btn btn-outline-danger"
                                    onClick={() => {
                                        window.localStorage.clear();
                                        Navigate("/alogin", { replace: true })
                                    }}>Logout</button>{" "}
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            <br />
        </>
    );
}

export default Anav;