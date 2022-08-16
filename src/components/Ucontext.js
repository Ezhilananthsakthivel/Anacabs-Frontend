import React, { createContext, useState } from "react";

export const AformContext = createContext({})

function AformProvider(props) {
    const [Aform, setAform] = useState({
        from: "",
        to: "",
        time: "",
        date: "",
        pnumber: "",
        did: "",
    })
    function Achange ({ target: { value, name } }) {
        setAform({ ...Aform, [name]: value })
    }
    return (
        <>
            <AformContext.Provider value={{ Aform, Achange }}>
                {props.children}
            </AformContext.Provider>
        </>
    )
}

export default AformProvider