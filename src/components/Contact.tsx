import React from 'react';
import './SplashPage.css';
import Navbar from './Navbar';

const ContactPage: React.FC = () => {
    return (
        <div> <Navbar />
            <div className="splash-page">
                <header className="header">
                    <h1 className="tagline">Random Contact Info</h1>
                    <p className="description">
                        somesadpeeps@gmail.com
                    </p>
                    <button className="documentation-button">Get them Digits</button>
                </header>
            </div>
        </div>
    )
}

export default ContactPage