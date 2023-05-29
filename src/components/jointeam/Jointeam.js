import React from 'react';
import { Link } from 'react-router-dom';
import './jointeam.css';

const JoinTeam = () => {
  return (
    <div className='jointeam'>
      <h1 className='heading'>Join our team</h1>
      <p className='intro-text'>Do you share our passion, drive, and vision?</p>
      <p className='intro-text'>Then we’d love to meet you!</p>

     

      <button type="button" className='hire-button'><h2>How we hire</h2></button>
    </div>
  );
};

export default JoinTeam;
