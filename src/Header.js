import React from 'react'
import Nav from "./Nav"
import { Link } from 'react-router-dom'
import "./Header.css"
import logo from './assets/logo.png';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <Nav />
            </nav>
        </header>
    )
}

export default Header;