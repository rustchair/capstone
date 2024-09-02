import React from 'react'
import logo from './assets/logo.png';
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <main>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>

                <div className="group">
                    <h4>Website Navigation</h4>
                    <ul className="navigation">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Menu">Menu</Link></li>
                        <li><Link to="/Reservations">Reservations</Link></li>
                        <li><Link to="/OrderOnline">Order Online</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </div>

                <div className="group">
                    <h4>Contact</h4>
                    <ul>
                        <p>Address</p>
                        <p>Phone</p>
                        <p>Email</p>
                    </ul>
                </div>

                <div className="group">
                    <h4>Social Media Links</h4>
                    <ul>
                        <p>Address</p>
                        <p>Phone</p>
                        <p>Email</p>
                    </ul>
                </div>
            </main>
        </footer>
    )
}

export default Footer;