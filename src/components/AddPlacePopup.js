import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

useEffect(() => {
  setName("");
  setLink("");
}, [isOpen]);

  function editNamePlace(evt) {
    setName(evt.target.value);
  }

  function editLinkPlace(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name: name, link: link });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="cards"
      textButton="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input_type_place popup__input"
        id="popup-input-place"
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        value={name}
        onChange={editNamePlace}
      />
      <span className="popup__input-error" id="popup-input-place-error"></span>

      <input
        className="popup__input_type_link popup__input"
        id="popup-input-link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={editLinkPlace}
      />
      <span className="popup__input-error" id="popup-input-link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
