import React, { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  function editNameProfile(evt) {
    setName(evt.target.value);
  }

  function editProfileInfo(evt) {
    setDescription(evt.target.value);
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input_type_name popup__input"
        id="popup-input-name"
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={editNameProfile}
      />
      <span className="popup__input-error" id="popup-input-name-error"></span>

      <input
        className="popup__input_type_job popup__input"
        id="popup-input-job"
        type="text"
        name="info"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
        value={description}
        onChange={editProfileInfo}
      />
      <span className="popup__input-error" id="popup-input-job-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
