import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './event.css';

const Event = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Hackathon', description: 'Description for Event 1' },
    { id: 2, title: 'Design Samvaad ', description: 'A Design & Ai Meetup' },
    { id: 3, title: 'Event 3', description: 'Description for Event 3' },
  ]);

  const openCard = (cardId) => {
    // Handle opening the card in a new page
    // You can use window.open() or any other method to open the card in a new tab or window
    console.log(`Opening card with ID ${cardId}`);
    // Example: window.open(`/event/${cardId}`, '_blank');
  };

  return (
    <div className='EventPage'>
    <h1>Event Page</h1>
    <div className='EventCards'>
     
      {cards.map((card) => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <button onClick={() => openCard(card.id)}>Open Card</button>
        </div>
      ))}
      <Link to="/">Go back</Link>
    </div>
    </div>
  );
};

export default Event;
