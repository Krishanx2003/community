import React from 'react';
import event from '../../assets/event.png';
import './Event.css';

const Event = () => {
  return (
    <div className="event-container">
      <img src={event} alt="event" />
    </div>
  );
}

export default Event;
