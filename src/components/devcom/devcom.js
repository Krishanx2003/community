import React from 'react';

import './devcom.css';

const Feature = ({ title, text }) => (
  <div className="feature">
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

const Devcom = () => (
  <div className="devcom section__margin">
    {/* devcom-feature section */}
    <div className="devcom-feature">
      <Feature
        title="What is Webuildcomm?"
        text="Bring your student community together, learn from each other, and grow into future leaders."
      />
    </div>

    {/* devcom-heading section */}
    <div className="devcom-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    <p>Explore the Community</p>
      

    </div>

  </div>
  
);

export default Devcom;
