import React from "react";

function Homeride(){
    return(
        <>
        <div className="container" >
        <div className="row">
            <div className="col-4">
                <div className="card hcardhover h-100" style={{width: "18rem"}}>
                    <img height="215" src="./images/citytaxi2.jpg" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">City Taxi</h5>
                        <p className="card-text">The perfect way to get through your everyday travel needs. City taxi
                            are
                            available 24/7
                            you can book and travel in an instant.With rides starting from as lower Rs. 6/km you can
                            choose from the
                            wide range of options!</p>
                    </div>
                </div>
            </div>
            <div className="col-4 ">
                <div className="card hcardhover h-100" style={{width: "18rem"}}>
                    <img height="215" src="./images/outst.jpg" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Outstation</h5>
                        <p className="card-text">Ride out of town at affordable one-way and round trip fares with our
                            intercity travels
                            service. choose from a range of AC cab driven by top partners available in 1 hour or
                            book up
                            to 7 days in
                            advance. We have you covered across India with presence in 90 + cities.</p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card hcardhover h-100" style={{width: "18rem"}}>
                    <img height="215" src="./images/rent.jpg" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Rentals</h5>
                        <p className="card-text">With our Rentals you get a cab at your disposal. So be today long
                            business
                            meeting your
                            shopping to with your friends or just a day out in a new city you have you covered.
                            Package
                            start at 1 hour
                            and can be extended up to 12 hours! We have you covered across India with presence in 90
                            +
                            cities</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
    </>
    )
}

export default Homeride