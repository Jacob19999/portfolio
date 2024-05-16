import React from 'react';

import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Navbar />
        
        <div className="pages">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Routes>
        </div>

        <Footer />

      </Router>
  );
}

export default App;