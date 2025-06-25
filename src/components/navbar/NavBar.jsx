import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"


const NavBar = ({ type }) => {

    return (
        <div id="navBarContainer">
            <div id="navBar">

                <Link to="/" style={{ color: "inherit", textDecoration: "none" }} >
                    <h1 className="logo">Booking App</h1>
                </Link>

                {
                    type === "login" ?
                        <div className="loginPageActive">
                            <h5 className="registerLine">Don't have an account ? <Link className='joinNowLink' to="/signUp">Join Now</Link> </h5>
                        </div> :
                        <div className="navBtns">
                            <Link className='navBarBtn' to="/signUp" > Register </Link>

                            <Link className='navBarBtn' to="/login" >Login</Link>
                        </div>
                }

            </div>
        </div>
    )
}

export default NavBar