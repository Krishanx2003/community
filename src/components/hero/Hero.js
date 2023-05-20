import React from 'react';
import './hero.css'; 
import hero from '../../assets/hero1.png';

function Hero() {
  return (
    <section className="hero-section">
    <h1 style={{ whiteSpace: 'pre-line' }}>
    Connect,
    {'\n'}
    Learn,
    {'\n'}
    Grow:  {'\n'}
    All in one platform for Student {'\n'} Communities.
  </h1>
  
      <div className="content">
        <p>Join a thriving community of students for learning and growth opportunities.</p>
        </div>
        <img src={hero} alt="example" className="image" />
    
    </section>
  );
}

export default Hero;
