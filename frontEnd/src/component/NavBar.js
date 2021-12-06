import React from 'react'
import { Link } from 'react-router-dom'
import{GrTwitter}from'react-icons/gr'
import "./App.css"

export default function NavBar(props) {
    return (
        <div id="Navbar">
            {
                props.token? "" : <p className="nav-span">
                    <Link to="/login" className="nav-link">Log in</Link>
                    <Link to="/signup" className="nav-link">Sign up</Link>
                </p>
            }
            
            <Link to="/"><GrTwitter/></Link>

            {
                props.token? <p className="nav-span">
                    <Link to="/users" className="nav-link">
                        Accounts
                    </Link>
                    <Link to="/login" onClick={()=>{
                    props.setToken("")
                    localStorage.setItem("token", "")
                    }} className="nav-link">Log out</Link>
                    <Link to="/favorite" className="nav-link">Favorite</Link>
                    </p> : ""
            }
            
        </div>
    )
}
