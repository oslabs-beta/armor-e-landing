import React from 'react';
import './SplashPage.css';
import Navbar from './Navbar';

const ServicesPage: React.FC = () => {
    return (
        <div> <Navbar />
            <div className="splash-page">
                <header className="header">
                    <h1 className="tagline">More to come on services</h1>
                    <p className="description">
                        Bottom text
                    </p>
                    <button className="documentation-button">Generic Button</button>
                </header>
            </div>
        </div>
    )
}

export default ServicesPage