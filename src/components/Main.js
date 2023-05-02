import React from 'react';
import Card from './Card';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main ({cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete}) {

    const currentUser = useContext(CurrentUserContext);

    return (
        <main>
        <section className="profile">
        <div className="profile__info">
            <button className="profile__avatar-edit-button" 
            type="button"
            onClick={onEditAvatar}>
            <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="аватар"
            />
        </button>

            <div className="profile__info-text">
            <div className="profile__main-info">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button className="profile__button-edit" 
                type="button" 
                onClick={onEditProfile}></button>
            </div>

            <p className="profile__about-me">{currentUser.about}</p>
            </div>
        </div>
        <button className="profile__button-plus" 
        type="button"
        onClick={onAddPlace}></button>
        </section>

        <section className="gallery">
            <ul className="gallery__cards">
                {cards.map((cards) => {
                return (
                    <Card card={cards} key={cards._id} onCardClick={onCardClick} onCardLike={onCardLike}  onCardDelete={onCardDelete} />
                )})}

            </ul>
        </section>
</main>
    )
}

export default Main;
