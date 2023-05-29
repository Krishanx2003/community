import React from 'react';
import possibitly from '../../assets/community/new/possibitly.png';
import './possibility.css';

const Possibility = () => (
  <div className="possibility section__padding">
    <div className="possibility-image">
      <img src={possibitly} alt="possibility" />
    </div>
    <div className="possibility-content">
     
      <h1 className="gradient__text">Connect with <br />like-minded students.</h1>
      <p>Devcom makes it easy for you to connect with a community of like-minded individuals from around the world who share similar interests, passions, and goals.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
