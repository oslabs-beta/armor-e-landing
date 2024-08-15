import React from 'react';
import './SplashPage.css';
import Navbar from './Navbar';

const nameArray = ["rocket-powered turbo chickens", "rocket-powered grenade chickens", "missile-guided fire chickens", "fire eagles with rockets", "rocket-fueled chicken farmers", "flaming space hens", "inferno chickens", "pyro-driven roosters", "celestial blaze chickens", "meteoric fire birds", "jet-propelled firebirds"];

const getRandomName =() => {
    const randomIndex = Math.floor(Math.random() * nameArray.length);
    return nameArray[randomIndex];
};

const SplashPage: React.FC = () => {
    const [groupName, setGroupName] = React.useState(getRandomName());

    React.useEffect(()=> {
        setGroupName(getRandomName());
    }, []);

    return (
        <div> <Navbar />
            <div className="splash-page">
                <header className="header">
                    <h1 className="tagline">We are Armor-E</h1>
                    <p className="description">
                        aka {groupName}
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
