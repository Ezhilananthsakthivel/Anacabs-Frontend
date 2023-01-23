import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Citytaxi from "../pages/Citytaxi";
import Cityverify from "../pages/Cityverify";
import Home from "../pages/Home";
import Ulogin from "../pages/Ulogin";
import Uregister from "../pages/Uregister";
import AformProvider from "./Ucontext";
import { Uprivateroute } from "./Privateroute"
import Mybookings from "../pages/Mybookings";
import Uprofile from "../pages/Uprofile";

function Userouter() {
    return (
        <AformProvider>
            <Routes>
                <Route path={"/login"} element={<Ulogin />} />
                <Route path={"/register"} element={<Uregister />} />
                <Route path={"/"} element={<Home />} />
                <Route path={"/home"} element={<Navigate to={"/"} />} />
                <Route path={"/citytaxi"} element={<Uprivateroute><Citytaxi /></Uprivateroute>} />
                <Route path={"/cityverify"} element={<Uprivateroute><Cityverify /></Uprivateroute>} />
                <Route path={"/mybookings"} element={<Uprivateroute><Mybookings /></Uprivateroute>} />
                <Route path={"/uprofile"} element={<Uprivateroute><Uprofile /></Uprivateroute>} />
            </Routes>
        </AformProvider>
    );
}

export default Userouter;