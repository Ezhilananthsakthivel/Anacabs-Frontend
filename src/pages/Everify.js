import React, { useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from "axios"

function Everify() {
    const [validurl, setValidurl] = useState(false)
    const params = useParams()

    // (async function(){
    //     const data = await axios.get(`http://localhost:3001/api/auth/${params.id}/verify/${params.token}`)
    // }())

    return (
        <>{validurl ?
            <div class="position-relative">
                <div class="position-absolute top-50 start-50 translate-middle">
                    <img src='./verified.gif'></img>
                    <p>click here to <Link to='/login'></Link></p>
                </div>
            </div>
            :
            <h1>404 Not Found</h1>
        }
        </>
    )
}

export default Everify