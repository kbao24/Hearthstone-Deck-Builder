import { useState } from 'react';
import './App.css';

const cardList = [
  // Your list of cards with details like name, image, etc.
  { id: 1, name: 'Card 1', image: 'card1.jpg' },
  { id: 2, name: 'Card 2', image: 'card2.jpg' },
  // Add more cards as needed
];

const DeckBuilder = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardSelect = (card) => {
    setSelectedCards([...selectedCards, card]);
  };

  return (
    <div className="deck-builder">
      <div className="card-list">
        {cardList.map((card) => (
          <div
            key={card.id}
            className="card"
            onClick={() => handleCardSelect(card)}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
      <div className="selected-cards">
        <h2>Selected Cards</h2>
        {selectedCards.map((selectedCard) => (
          <div key={selectedCard.id} className="selected-card">
            <img src={selectedCard.image} alt={selectedCard.name} />
            <p>{selectedCard.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeckBuilder;
