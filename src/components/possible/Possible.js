import React from 'react';
import IMG from '../../assets/IMG.png';
import './Possible.css';

const Possible = () => (
  <div className="possible section__padding">
    <div className="possible-image">
      <img src={IMG} alt="Possible" />
    </div>
    <div className="possible-content">
      <h4>Request Early Access to Get Started</h4>
      
      <h1 className="gradient__text">Grow your <br />personal brand.</h1>
      <p>Devcom makes it easy for you to connect with a community of like-minded individuals from around the world who share similar interests, passions, and goals.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possible;
