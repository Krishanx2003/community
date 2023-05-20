import React from 'react';
import './community.css'; // Import the CSS file
import comm1 from '../../assets/comm1.png';
import comm2 from '../../assets/comm2.png';
import comm3 from '../../assets/comm3.png';
import comm4 from '../../assets/comm4.png';
import comm5 from '../../assets/comm5.png';
import comm6 from '../../assets/comm6.png';


function CommunityContent() {
  return (
    <div className="community-content">
      <h1>Community Content</h1>
<section className="Section-boxes">
      <section className="section-box">
      <img src={comm1} alt="example" className="image" />
        <h2>Chatting</h2>
        <p class="font-serif">Welcome to the chat room! Feel free to discuss any topics, ask questions, or share your thoughts.</p>
        {/* Chatting component or implementation */}
      </section>

      <section className="section-box">
      <img src={comm2} alt="example" className="image" />
        <h2>Teach & Learn</h2>
        <p class="font-serif">Got knowledge to share or eager to learn something new? This section is dedicated to teaching and learning from each other.</p>
        {/* Teach & Learn component or implementation */}
      </section>

      <section className="section-box">
      <img src={comm3} alt="example" className="image" />
        <h2>Problem Solving</h2>
        <p>Stuck on a problem or looking for solutions? Join the problem-solving section to get help from the community.</p>
        {/* Problem Solving component or implementation */}
      </section>

      <section className="section-box">
      <img src={comm4} alt="example" className="image" />
        <h2>Code Challenge</h2>
        <p>Test your coding skills with our code challenges. Solve interesting problems and showcase your solutions.</p>
        {/* Code Challenge component or implementation */}
      </section>

      <section className="section-box">
      <img src={comm5} alt="example" className="image" />
        <h2>Pair Programming</h2>
        <p>Find a coding partner and collaborate on projects together. Pair programming helps in learning and improving coding skills.</p>
        {/* Pair Programming component or implementation */}
      </section>
      <section className="section-box">
      <img src={comm6} alt="example" className="image" />
        <h2>Pair Programming</h2>
        <p>Find a coding partner and collaborate on projects together. Pair programming helps in learning and improving coding skills.</p>
        {/* Pair Programming component or implementation */}
      </section>
      </section>
    </div>
  );
}

export default CommunityContent;
