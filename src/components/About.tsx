import React from 'react';
import './SplashPage.css';
import Navbar from './Navbar';

const AboutPage: React.FC = () => {
    return (
        <div> <Navbar />
            <div className="splash-page">
                <header className="header">
                    <h1 className="tagline">About the team behind Armor-E</h1>
                    <p className="description">
                        We're just group of really cool individuals that are striving to make sometheing cool.
                    </p>
                    <div className="bio-section">
                        <div className="bio">
                            <h2 className="bio-title">Elizabeth<img className='bio-pic' src={require('../assets/Elizabeth Bio Image.png')} alt="Elizabeth bio" /></h2>
                            <p className="bio-description">
                                Placeholder text
                            </p>
                        </div>
                        <div className="bio">

                            <h2 className="bio-title">Dylan<img className='bio-pic' src={require('../assets/Dylan Bio Image.png')} alt="Dylan bio" /></h2>

                            <p className="bio-description">
                                I will 1 million BILLION percent make you lose The Game and I don't even care.
                            </p>
                        </div>
                        <div className="bio">
                            <h2 className="bio-title">Max<img className='bio-pic' src={require('../assets/Max Bio Image.png')} alt="Max bio" /></h2>
                            <p className="bio-description">
                                Know by only a select few as Max E π
                            </p>
                        </div>
                        <div className="bio">
                            <h2 className="bio-title">Sincere<img className='bio-pic' src={require('../assets/Sincere Bio Image.png')} alt="Max bio" /></h2>
                            <p className="bio-description">
                                Placeholder text
                            </p>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default AboutPage