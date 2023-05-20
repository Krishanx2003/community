import React from 'react';
import IMG from '../../assets/IMG.png';
import './possibility.css';

const Possibility = () => (
  <div className="possibility section__padding">
    <div className="possibility-image">
      <img src={IMG} alt="possibility" />
    </div>
    <div className="possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Connect with <br />like-minded students.</h1>
      <p>Devcom makes it easy for you to connect with a community of like-minded individuals from around the world who share similar interests, passions, and goals.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
