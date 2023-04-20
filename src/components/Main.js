import React from 'react';
import Card from './Card';
import { api } from '../utils/api';

function Main ({onEditProfile,  onAddPlace, onEditAvatar, onCardClick}) {

const [userName, setUserName] = React.useState();
const [userDescription, setUserDescription] = React.useState();
const [userAvatar, setUserAvatar] = React.useState();
const [cards, setCards] = React.useState([]);


React.useEffect (() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
    ([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
    }
    ).catch((err) => {
        console.log(err);
        })
}, [])

    return (
        <main>
        <section className="profile">
        <div className="profile__info">
            <button className="profile__avatar-edit-button" 
            type="button"
            onClick={onEditAvatar}>
            <img
            className="profile__avatar"
            src={userAvatar}
            alt="аватар"
            />
        </button>

            <div className="profile__info-text">
            <div className="profile__main-info">
                <h1 className="profile__name">{userName}</h1>
                <button className="profile__button-edit" 
                type="button" 
                onClick={onEditProfile}></button>
            </div>

            <p className="profile__about-me">{userDescription}</p>
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
                    <Card card={cards} key={cards._id} onCardClick={onCardClick} />
                )})}

            </ul>
        </section>


</main>
    )
}

export default Main;
