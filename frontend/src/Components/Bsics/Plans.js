import React from 'react';
import './Plans.css';

const Plans = () => {
  return (
    <div className="plans-container">
      <h1>Meal Plans</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        nibh vel velit tincidunt, a fermentum justo interdum. In facilisis
        nulla et sapien malesuada, in tincidunt tortor fringilla. Sed
        tincidunt dapibus eros, at sollicitudin ex tincidunt ac. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Cras tincidunt mi vel tortor venenatis, eget vehicula felis
        pharetra. Aliquam euismod interdum euismod.
      </p>
      <h2>Choose your Plan</h2>
      <div className="plan-card">
        <h3>Standard Plan</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          arcu euismod, feugiat velit id, elementum sapien.
        </p>
        <button className="btn btn-primary">Select</button>
      </div>
      <div className="plan-card">
        <h3>Premium Plan</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          arcu euismod, feugiat velit id, elementum sapien.
        </p>
        <button className="btn btn-primary">Select</button>
      </div>
      <div className="plan-card">
        <h3>Deluxe Plan</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          arcu euismod, feugiat velit id, elementum sapien.
        </p>
        <button className="btn btn-primary">Select</button>
      </div>
    </div>
  );
};

export default Plans;
