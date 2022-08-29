import React from "react";

export function Aprivateroute({ children }) {
    const auth = window.localStorage.getItem("Aauth");
    return auth ? children : window.location = "/alogin"
}

export function Dprivateroute({ children }) {
    const auth = window.localStorage.getItem("Dauth");
    return auth ? children : window.location = "/dlogin"
}

export function Uprivateroute({ children }) {
    const auth = window.localStorage.getItem("Uauth");
    return auth ? children : window.location = "/login"
}