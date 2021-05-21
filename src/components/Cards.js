import React from 'react';
import Loader from "react-loader-spinner";
import '../styles/components/Cards.scss';

const Cards = ({
  isLoading,
  isSetInValid,
  cards
}) => {
  if (isLoading) {
    return (
      <div className="loading-bar">
        <Loader
          type="Oval"
          color="#000"
          height={60}
          width={60}
          timeout={3000}
        />
      </div>
    );
  }
  if (isSetInValid) {
    return (
      <div className="error-text">
        Images of this set are currently unavailable, please try another one.
      </div>
    );
  }
  return (
    <div className="cards-wrapper">
      {cards.map(card => card.imageUrl ? (
        <img className="card" src={card.imageUrl} key={card.id} alt="" />
      ) : null)}
    </div>
  );
};

export default Cards;