import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom"


const NavBar = () => {

    return (
        <div id="navBarContainer">
            <div id="navBar">

                <Link to="/" style={{color : "inherit" , textDecoration : "none"}} >
                    <h1 className="logo">Booking App</h1>
                </Link>

                <div className="navBtns">
                    <button>Register</button>
                    <button>Login</button>
                </div>

            </div>
        </div>
    )
}

export default NavBar