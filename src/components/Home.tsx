import React from 'react';
import './SplashPage.css';
import Navbar from './Navbar';

const HomePage: React.FC = () => {
    const toGitHub = () => {
        window.open ('https://github.com/orgs/oslabs-beta/teams/armor-e/repositories', '_blank');
    };

    const nameArray = ["rocket-powered turbo chickens", "rocket-powered grenade chickens", "missile-guided fire chickens", "fire eagles with rockets", "rocket-fueled chicken farmers", "flaming space hens", "inferno chickens", "pyro-driven roosters", "celestial blaze chickens", "meteoric fire birds", "jet-propelled firebirds"];

    const getRandomName =() => {
       const randomIndex = Math.floor(Math.random() * nameArray.length);
       return nameArray[randomIndex];
};

    const [groupName, setGroupName] = React.useState(getRandomName());

    React.useEffect(() => {
        setGroupName(getRandomName())
    }, []);
    
    return (
        <div> <Navbar />
         
            <div className="splash-page">
            <img className='main-logo' id='left' src={require('../assets/Armor-E Logo t.png')} alt="Logo" />
                <header className="header">
                    <h1 className="tagline">Welcome to Armor-E</h1>
                    <p className="description">
                    ARMOR-E (Authentication Repository Management for Open-Source Resilience and End-to-end Security) is a full stack library providing both frontend 
                    components and backend middleware authentication, providing a truly full stack authentication solution. 
                    Our libraries make it easy for the developer to navigate and understand how they will be implementing their authentication on any given project. 
                    </p>
                    <p>
                        Created by: {groupName}
                    </p>
                    <button className="learn-more" onClick={toGitHub} >GitHub</button>
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
                            A brief demonstration of how the library works
                        </p>
                    </div>
                    <div className="feature" >
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

export default HomePage;
