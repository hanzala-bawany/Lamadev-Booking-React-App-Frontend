import React from 'react'
import "./NavBar.css"

const NavBar = () => {

    return (
        <div id="navBarContainer">
            <div id="navBar">

                <h1 className="logo">Booking App</h1>
                <div className="navBtns">
                    <button>Register</button>
                    <button>Login</button>
                </div>
            
            </div>
        </div>
    )
}

export default NavBar