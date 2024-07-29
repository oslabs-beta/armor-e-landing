import React from 'react';
import SplashPage from './components/SplashPage';
import NavBar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <NavBar />
            <SplashPage />
        </div>
    );
};

export default App;