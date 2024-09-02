import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/Reservations">Reservations</Link></li>
            <li><Link to="/OrderOnline">Order Online</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ul>
    )
}

export default Nav;