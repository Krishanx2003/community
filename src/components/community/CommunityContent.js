import React from 'react';
import './community.css'; // Import the CSS file
import com11 from '../../assets/com11.png';
import com12 from '../../assets/com12.png';
import com13 from '../../assets/com13.png';
import com14 from '../../assets/com14.png';
import com15 from '../../assets/com15.png';
import com16 from '../../assets/com16.png';

function CommunityContent() {
  return (
    <div className="community-content">
      <h1>Community Content</h1>
      <section className="Section-boxes">
        <section className="section-box">
          <img src={com11} alt="example" className="image" />
          <h2>Chatting</h2>
          <p className="font-serif">Welcome to the chat room! Feel free to discuss any topics, ask questions, or share your thoughts.</p>
          {/* Chatting component or implementation */}
        </section>

        <section className="section-box">
          <img src={com12} alt="example" className="image" />
          <h2>Teach & Learn</h2>
          <p className="font-serif">Got knowledge to share or eager to learn something new? This section is dedicated to teaching and learning from each other.</p>
          {/* Teach & Learn component or implementation */}
        </section>

        <section className="section-box">
          <img src={com13} alt="example" className="image" />
          <h2>Problem Solving</h2>
          <p>Stuck on a problem or looking for solutions? Join the problem-solving section to get help from the community.</p>
          {/* Problem Solving component or implementation */}
        </section>

        <section className="section-box">
          <img src={com14} alt="example" className="image" />
          <h2>Code Challenge</h2>
          <p>Test your coding skills with our code challenges. Solve interesting problems and showcase your solutions.</p>
          {/* Code Challenge component or implementation */}
        </section>

        <section className="section-box">
          <img src={com15} alt="example" className="image" />
          <h2>Pair Programming</h2>
          <p>Find a coding partner and collaborate on projects together. Pair programming helps in learning and improving coding skills.</p>
          {/* Pair Programming component or implementation */}
        </section>

        <section className="section-box">
          <img src={com16} alt="example" className="image" />
          <h2>Pair Programming</h2>
          <p>Find a coding partner and collaborate on projects together. Pair programming helps in learning and improving coding skills.</p>
          {/* Pair Programming component or implementation */}
        </section>
      </section>
    </div>
  );
}

export default CommunityContent;
