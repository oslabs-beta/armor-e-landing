import React from 'react';
import './SplashPage.css';
import Navbar from './Navbar';

const SplashPage: React.FC = () => {
    return (
        <div> <Navbar />
            <div className="splash-page">
                <header className="header">
                    <h1 className="tagline">We are Armor-E</h1>
                    <p className="description">
                        aka the rocket powered turbo chickens
                    </p>
                    <button className="learn-more">Learn More</button>
                </header>
                <div className="feature-section">
                    <div className="feature">
                        <h2 className="feature-title">Documentation</h2>
                        <p className="feature-description">
                            A guide to utlizing Armor-E to it's fullest!
                        </p>
                    </div>
                    <div className="feature">
                        <h2 className="feature-title">Examples</h2>
                        <p className="feature-description">
                            A breif demonstration of how the library works
                        </p>
                    </div>
                    <div className="feature">
                        <h2 className="feature-title">Contact Us</h2>
                        <p className="feature-description">
                            We're here to help you with any questions or concerns.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplashPage;
