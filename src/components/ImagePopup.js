import React from 'react';

function ImagePopup({card, onClose, isOpen}) {

    return (
        <section className={`popup popup_section_photo ${isOpen ? "popup_is-opened" : ""}`}>
        <div className="popup__photo-container">
            <figure className="popup__place">
            <button
                className="popup__close popup__close-photo"
                type="button"
                onClick={onClose}
            />
            <img className="popup__image" src={card.link} alt="" />
            <figcaption className="popup__figcaption">{card.name}</figcaption>
            </figure>
        </div>
        </section>
    )
}

export default ImagePopup;