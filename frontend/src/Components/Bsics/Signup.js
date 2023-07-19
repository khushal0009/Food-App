import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <Link to="/login">Already have an account? Log in here.</Link>
    </div>
  );
};

export default Signup;
