import React from "react";
import { Route, Routes } from 'react-router-dom';
import Dhome from "../pages/Dhome";
import Dorders from "../pages/Dorders";
import Dlogin from "../pages/Dlogin";
import Dhistory from "../pages/Dhistory"
import { Dprivateroute } from "./Privateroute";


function Driverouter() {
    return (
        <Routes>
            <Route path={"/dlogin"} element={<Dlogin />} />
            <Route path={"/dhome"} element={<Dprivateroute><Dhome /></Dprivateroute>} />
            <Route path={"/dorders"} element={<Dprivateroute><Dorders /></Dprivateroute>} />
            <Route path={"/dhistory"} element={<Dprivateroute><Dhistory /></Dprivateroute>} />
        </Routes>
    );
}

export default Driverouter;