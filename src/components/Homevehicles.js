import React from "react";

function Homevehicles() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-8">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./images/mini.png" />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/prime-play.png" />
                            </div>
                            <div className="carousel-item">
                                <img src="./images/prime-suv.png" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homevehicles;