import React from 'react';
import './Navbar.css';
import { GetImageURL } from './images/image-utils.ts.

const Navbar: React.FC = () => {
    return (
        <nav className="floating-nav">
            <img src="./images/armor-e logo.png" alt="Logo"/>
            <ul className="nav-list">
                <li className="nav-item"><a href="home">Home</a></li>
                <li className="nav-item"><a href="#about">About</a></li>
                <li className="nav-item"><a href="#services">Services</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

