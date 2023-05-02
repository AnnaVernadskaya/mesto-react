import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
    
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `gallery__button-like ${isLiked && 'gallery__button-like_active'}`;

    function handleClick() {
        onCardClick(card);
        } 

    function handleLikeClick() {
        onCardLike(card);
        }

    function handleDeleteCard() {
        onCardDelete(card);
    }

    return (
        <li className="gallery__card">
            {isOwn && <button className="gallery__delete-card"  type="button" onClick={handleDeleteCard} />}
        <img className="gallery__img" 
        src={card.link} 
        alt={card.name} 
        onClick={handleClick} />
        <div className="gallery__card-info">
            <h2 className="gallery__place">{card.name}</h2>
            <div className="gallery__like">
            <button className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"></button>
            <p className="gallery__number-like">{card.likes.length}</p>
        </div>
        </div>
        </li>
    );
}

export default Card;