import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibilityy.css';

const Possibilityy = () => (
  <div className="possibilityy section__padding">
    <div className="possibilityy-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="possibilityy-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Learn <br /> new skills.</h1>
      <p>Our platform provides access to various learning resources, including tutorials, courses, and webinars, all designed to help you learn new skills to advance your education and career.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibilityy;
