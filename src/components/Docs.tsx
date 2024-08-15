import React from 'react';
import './SplashPage.css';
import Navbar from './Navbar';
import ArmorEReactGuide from './Guides';
 

const ArmorEReactGuidePage: React.FC = () => {
    const toGitHub = () => {
        window.open ('https://github.com/orgs/oslabs-beta/teams/armor-e/repositories', '_blank');
    }
    return (
        <div > <Navbar />
            <div className="docs-page">
                <header className="header">
                    <h1 className="tagline">More to come on services</h1>
                    <p className="description">
                        {<ArmorEReactGuide />}
                    </p>
                    <button className="learn-more" onClick={toGitHub}>Githubs!</button>
                </header>
            </div>
        </div>
    )
}

export default ArmorEReactGuidePage