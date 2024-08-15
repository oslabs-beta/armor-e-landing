import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const toAbout = () => {
        navigate('/about');
    }

    const toDocs = () => {
        navigate('/services')
    }

    const toContact = () => {
        navigate('/contact')
    }

    return (
        <nav className="floating-nav">
            <img className='nav-logo' src={require('../assets/Armor-E Logo t.png')} alt="Logo"/>
            <ul className="nav-list">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/about" onClick={toAbout}>About</a></li>
                <li className="nav-item"><a href="/services" onClick={toDocs}>Docs</a></li>
                <li className="nav-item"><a href="/contact" onClick={toContact}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

