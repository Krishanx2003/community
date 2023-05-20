
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import About from '../components/about/About';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
