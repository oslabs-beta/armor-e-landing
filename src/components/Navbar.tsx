import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
// import { GetImageURL } from './images/image-utils.ts.

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const toAbout = () => {
        navigate('/about');
    }

    const toServices = () => {
        navigate('/services')
    }

    const toContact = () => {
        navigate('/contact')
    }

    return (
        <nav className="floating-nav">
            <img src="./images/armor-e logo.png" alt="Logo"/>
            <ul className="nav-list">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/about" onClick={toAbout}>About</a></li>
                <li className="nav-item"><a href="/services" onClick={toServices}>Services</a></li>
                <li className="nav-item"><a href="/contact" onClick={toContact}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

