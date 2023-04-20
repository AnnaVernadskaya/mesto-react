import React from 'react';

function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
        }  

    return (
        <li className="gallery__card">
        <button className="gallery__delete-card" 
        type="button"></button>
        <img className="gallery__img" 
        src={card.link} 
        alt={card.name} 
        onClick={handleClick} />
        <div className="gallery__card-info">
            <h2 className="gallery__place">{card.name}</h2>
            <div className="gallery__like">
            <button className="gallery__button-like" 
            type="button"></button>
            <p className="gallery__number-like">0</p>
        </div>
        </div>
        </li>
    );
}

export default Card;