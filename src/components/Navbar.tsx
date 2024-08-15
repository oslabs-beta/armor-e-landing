import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
// import { GetImageURL } from '../../images/armor-e-logo.png'
import * as url from '../assets/armor-e logo small.png'


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
            <img src={require('../assets/armor-e logo small.png')} alt="Logo"/>
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

