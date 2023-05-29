import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './event.css';

import hack1 from '../../assets/hack1.png';
import hack2 from '../../assets/hack2.png';
import hack3 from '../../assets/hack3.png';

const Event = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Hackathon', description: 'A Design & AI Meetup', image: hack1, date: 'May 30, 2023' },
    { id: 2, title: 'Design Samvaad', description: 'A Design & AI Meetup', image: hack2, date: 'June 5, 2023' },
    { id: 3, title: 'Devfolio', description: 'A Design & AI Meetup', image: hack3, date: 'June 15, 2023' },
  ]);

  const openCard = (cardId) => {
    // Handle opening the card in a new page
    // You can use window.open() or any other method to open the card in a new tab or window
    console.log(`Opening card with ID ${cardId}`);
    // Example: window.open(`/event/${cardId}`, '_blank');
  };

  return (
    <div className='EventPage'>
      <h1>Event</h1>
      <div className='EventCards'>
        {cards.map((card) => (
          <div key={card.id} className='Card'>
            <h2>{card.title}</h2>
            <img src={card.image} alt={card.title} />
            <p>{card.description}</p>
            <p>Date: {card.date}</p>
            <button onClick={() => openCard(card.id)}>Details</button>
          </div>
        ))}
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};

export default Event;