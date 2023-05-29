import React from 'react';
import { Link } from 'react-router-dom';
import we from '../../assets/we.png';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Join our free learning community now.</h1>
    </div>

    <div className="footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={we} alt="logo" />
        <p>@2023 .  <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Webuildcomm</h4>
      <p> <Link to="/community">Community</Link></p> 
       <p>  <Link to="/events">Events</Link></p> 
       <p>   <Link to="/about">About</Link></p> 
      </div>
      <div className="footer-links_div">
        <h4>Social Media</h4>
        <p>Instagram </p>
        <p>Youtube</p>
        <p>Discord</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>Greater Noida, India</p>
        <p></p>
        <p>learnthefutureai@gmail.com</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2023 Webuildcomm. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
