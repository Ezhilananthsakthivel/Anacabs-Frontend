import React from "react";
import { Route, Routes } from 'react-router-dom';
import Citytaxi from "../pages/Citytaxi";
import Cityverify from "../pages/Cityverify";
import Home from "../pages/Home";
import AformProvider from "./Ucontext";

function Userouter() {
    return (
        <AformProvider>
            <Routes>
                <Route path={"/citytaxi"} element={<Citytaxi />} />
                <Route path={"/cityverify"} element={<Cityverify />} />
                <Route path={"*"} render={() => <h1>404 page not found</h1>} />
                <Route path={"/"} element={<Home />} exact />
            </Routes>
        </AformProvider>
    );
}

export default Userouter;