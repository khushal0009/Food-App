import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Basics/Navbar';
import Features from './Components/Basics/Features';
import Steps from './Components/Basics/Steps';
import Contact from './Components/Basics/Contact';
import Home from './Components/Basics/Home';
import Plans from './Components/Basics/Plans';
import Login from './Components/Basics/Login'; 
import Signup from './Components/Basics/Signup'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
      <Features />
      <Steps />
      <Contact />
    </Router>
  );
};

export default App;
