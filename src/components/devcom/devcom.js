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
        title="What is Devcom ?"
        text="Bring your student community together, learn from each other, and grow into future leaders."
      />
    </div>

    {/* devcom-heading section */}
    <div className="devcom-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    <p>Explore the Community</p>
      

    </div>

    {/* devcom-container section
    <div className="devcom-container">
      <Feature
        title="Connect with like-minded students."
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />
      <Feature
        title="Grow your personal brand."
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="Grow your personal brand."
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
    </div>
     */}
  </div>
  
);

export default Devcom;
