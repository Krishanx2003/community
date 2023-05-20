import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
import team3 from '../../assets/team3.jpg';
import './about.css';

const About = () => {
  const teamMembers = [
    { id: 1, name: 'Krishan Sharma', role: 'Cofounder', image: team1, socialMedia: { linkedin: 'https://www.linkedin.com/profile1', twitter: 'https://www.twitter.com/profile1', instagram: 'https://www.instagram.com/profile1' } },
    { id: 2, name: 'Raghav Gandhi', role: 'Cofounder', image: team2, socialMedia: { linkedin: 'https://www.linkedin.com/profile2', twitter: 'https://www.twitter.com/profile2', instagram: 'https://www.instagram.com/profile2' } },
    { id: 3, name: 'Hani Chaudary', role: 'Design & BackEnd', image: team3, socialMedia: { linkedin: 'https://www.linkedin.com/profile3', twitter: 'https://www.twitter.com/profile3', instagram: 'https://www.instagram.com/profile3' } },
  ];

  return (
    <div className="about-page">
      <h1>About Devcon</h1>
      <p>At DevCom, we believe in the power of connections, the pursuit of knowledge, and the endless possibilities that come with personal and professional growth. Our platform is designed to bring together student communities from various disciplines, creating an inclusive and supportive environment where individuals can connect, learn, and grow.</p>

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
