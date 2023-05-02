import React from 'react';

function PopupWithForm({title, name, children, textButton, isOpen, onClose, onSubmit }) {
    return (
    <section
        className={`popup popup_section_${name} ${isOpen ? "popup_is-opened" : ""}`}
    >
        <div className="popup__container">
        <button
            className="popup__close"
            type="button"
            onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
            className="popup__form"
            action="#"
            method="post"
            name={`${name}`}
            noValidate
            onSubmit={onSubmit}
        >
            {children}
            <button
            className="popup__button-save popup__button-save-profile"
            type="submit"
            >
            {textButton}
            </button>
        </form>
        </div>
    </section>
    );
}

export default PopupWithForm;
