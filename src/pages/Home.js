import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';

import Footer from '../components/footer/Footer';
import Sponser from '../components/Sponser/Sponser';
import CTA from '../components/cta/CTA';
import Devcom from '../components/devcom/devcom';
import Possibility from '../components/possibility/Possibility';
import Possibilityy from '../components/possibilityy/Possibilityy';
import Possible from '../components/possible/Possible';

function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
<Sponser />
<Devcom />
<Possibility />
<Possibilityy />
<Possible />
  <CTA />
    <Footer />
    </div>
  );
}

export default Home;
