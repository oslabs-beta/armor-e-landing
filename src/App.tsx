import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import HomePage from './components/Home';
import AboutPage from './components/About';
import ServicesPage from './components/Docs';
import ContactPage from './components/Contact';
import './App.css';

const App: React.FC = () => {
    return (
        
        <Router>
            <Routes>
                <Route path="/contact"
                    element={<ContactPage />} />
                <Route path="/services"
                    element={<ServicesPage />} />
                <Route path="/about"
                    element={<AboutPage />} />
                <Route path="/"
                    element={<HomePage />} />
            </Routes>
        </Router>


    );
};

export default App;