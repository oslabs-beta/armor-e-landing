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
                            A software engineer that loves Express more than she loves sunshine. 
                            I am experienced in Express, MongoDB, Docker, and EC2. 
                            Also, I have a senior dog who runs my life ruthlessly.
                            </p>
                        </div>
                        <div className="bio">

                            <h2 className="bio-title">Dylan<img className='bio-pic' src={require('../assets/Dylan Bio Image.png')} alt="Dylan bio" /></h2>

                            <p className="bio-description">
                                A tech enthusiast with a passion for service and commitment to
                                excellence. Proven expertise of conflict resolution, data entry, and
                                working in a high-pressure environment. Ardent computer, console, card and table-top gamer. 
                                Current favorites include: The Legend of Zelda, Final Fantasy XIV, Magic the Gathering and Magic the Gathering.

                            </p>
                        </div>
                        <div className="bio">
                            <h2 className="bio-title">Max<img className='bio-pic' src={require('../assets/Max Bio Image.png')} alt="Max bio" /></h2>
                            <p className="bio-description">
                                Known by only a select few as Max E π
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