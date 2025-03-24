import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other pages when they are created */}
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;