import React from 'react';
import event from '../../assets/event.png';
import './Communityimg.css';

const Communityimg = () => {
  return (
    <div className="Community-container">
      <div className="image-container">
        <img src={event} alt="event" />
      </div>
    </div>
  );
}

export default Communityimg;
