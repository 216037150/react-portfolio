// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to import your css.

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleMenuClick = () => {
        setActive(!active);
    };

    return (
        <header className="header">
            <div className="logo">My Portfolio</div>
            <div className="menu-icon">
                <i className='bx bx-menu' id="menu-btn" onClick={handleMenuClick}></i>
            </div>

            <nav className={`navbar ${active ? 'active' : ''}`}>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/services" className="nav-link">Services</Link>
                <Link to="/skills" className="nav-link">Skills</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <a href="./Siyabonga_Zungu_Resume_G.pdf" download className="nav-link">CV</a>
            </nav>
        </header>
    );
};

export default Navbar;