import React from "react";
import { Route, Routes } from 'react-router-dom';
import Ahome from "../pages/Ahome";
import Drivers from "../pages/Drivers";
import Bookings from "../pages/Bookings";
import Alogin from "../pages/Alogin";
import Dregister from "../pages/Dregister";
import { Aprivateroute } from "./Privateroute";

function Adminrouter() {
    return (
        <Routes>
            <Route path="/alogin" element={<Alogin />} />
            <Route path="/ahome" element={<Aprivateroute><Ahome /></Aprivateroute>} />
            <Route path="/drivers" element={<Aprivateroute><Drivers /></Aprivateroute>} />
            <Route path={"/dregister"} element={<Aprivateroute><Dregister /></Aprivateroute>} />
            <Route path="/bookings" element={<Aprivateroute><Bookings /></Aprivateroute>} />
        </Routes>
    );
}

export default Adminrouter;