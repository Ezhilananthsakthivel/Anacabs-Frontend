import React from "react";

function Homefooter() {
    return (
        <footer style={{
            textAlign: "center",
            // backgroundColor: "burlywood"
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-content" style={{
                            borderTop: "2px solid rgb(10, 8, 8)",
                            margintop: "50px",
                            padding: "50px 0px"
                        }}>
                            <p>Copyright © 2022 Company Name - Anacabs </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Homefooter;