import React from "react";

function Homeadd() {
    return ( 
        <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="card mb-3" style={{maxWidth: "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4 hcardhover">
                                <img height="100" src="./images/digital.jpg" className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Cashless Rides</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card mb-3" style={{maxWidth: "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4 hcardhover">
                                <img height="100" src="./images/safe ride.jpg" className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Secure & Safe Rides</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 ">
                    <div className="card mb-3 " style={{maxWidth: "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4 hcardhover">
                                <img height="100" src="./images/agent-services-banner241.jpg"
                                    className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">24/7 Customer Support</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mb-3 " style={{maxWidth: "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4 hcardhover">
                                <img height="100" src="./images/Seat_belt_safety.jpg" className="img-fluid rounded-start"
                                    />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Your Safety First</h5>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mb-3" style={{maxWidth: "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4 hcardhover">
                                <img height="100" src="./images/partners1.jpg" className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Top Rated Driver-Partners</h5>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Homeadd;