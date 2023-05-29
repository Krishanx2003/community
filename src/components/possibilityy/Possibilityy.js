import React from 'react';
import po from '../../assets/community/new/po.png';
import './possibilityy.css';

const Possibilityy = () => (
  <div className="possibilityy section__padding">
    <div className="possibilityy-image">
      <img src={po} alt="possibility" />
    </div>
    <div className="possibilityy-content">

      <h1 className="gradient__text">Learn <br /> new skills.</h1>
      <p>Our platform provides access to various learning resources, including tutorials, courses, and webinars, all designed to help you learn new skills to advance your education and career.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibilityy;
