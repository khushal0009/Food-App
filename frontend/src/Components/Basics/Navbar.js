import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" activeclassname="active-link">Home</NavLink></li>
        <li><NavLink to="/plans" activeclassname="active-link">Plans</NavLink></li>
        <li><NavLink to="/login" activeclassname="active-link">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
