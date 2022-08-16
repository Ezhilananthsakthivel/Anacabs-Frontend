import React from "react";
import { useNavigate } from "react-router-dom"

function Dnav() {
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
                                        Navigate("/dlogin", { replace: true })
                                    }}>Log out</button>{" "}
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            <br />
        </>
    );
}

export default Dnav;