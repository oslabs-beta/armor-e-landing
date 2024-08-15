import React from 'react';
import './SplashPage.css';
import Navbar from './Navbar';

const AboutPage: React.FC = () => {
    return (
        <div> <Navbar />
            <div className="splash-page">
                <header className="header">
                    <h1 className="tagline">THIS WILL BE THE ABOUT PAGE</h1>
                    <p className="description">
                        aka the rocket powered turbo chickens
                    </p>
                    <button className="documentation-button">Learn More</button>
                </header>
            </div>
        </div>
    )
}

export default AboutPage