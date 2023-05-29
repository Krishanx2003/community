import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import krishanlogo from '../../assets/krishanlogo.png';
import Raghavlogo from '../../assets/Raghavlogo.png';
import hanilogo from '../../assets/hanilogo.png';
import './about.css';

const About = () => {
  const teamMembers = [
    { id: 1, name: 'Krishan Sharma', role: 'Cofounder', image: krishanlogo, socialMedia: { linkedin: 'https://www.linkedin.com/profile1', twitter: 'https://www.twitter.com/profile1', instagram: 'https://www.instagram.com/profile1' } },
    { id: 2, name: 'Raghav Gandhi', role: 'Cofounder', image: Raghavlogo, socialMedia: { linkedin: 'https://www.linkedin.com/profile2', twitter: 'https://www.twitter.com/profile2', instagram: 'https://www.instagram.com/profile2' } },
    { id: 3, name: 'Hani Chaudary', role: 'Design & BackEnd', image: hanilogo, socialMedia: { linkedin: 'https://www.linkedin.com/profile3', twitter: 'https://www.twitter.com/profile3', instagram: 'https://www.instagram.com/profile3' } },
  ];

  return (
    <div className="about-page">
      <h1>About Webuildcomm</h1>
      <p>At Webuildcomm, we believe in the power of connections, the pursuit of knowledge, and the endless possibilities that come with personal and professional growth. Our platform is designed to bring together student communities from various disciplines, creating an inclusive and supportive environment where individuals can connect, learn, and grow.</p>

      <h2>Our Team</h2>
      <ul className="team-list">
        {teamMembers.map((member) => (
          <li key={member.id} className="team-member">
            <img src={member.image} alt={member.name} className="team-member-image" loading="lazy" />
            <div className="team-member-details">
              <strong>{member.name}</strong> - {member.role}
              <div className="social-icons">
                {member.socialMedia.linkedin && (
                  <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                )}
                {member.socialMedia.twitter && (
                  <a href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                )}
                {member.socialMedia.instagram && (
                  <a href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
