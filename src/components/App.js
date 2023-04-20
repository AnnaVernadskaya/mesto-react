import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [selectedCard, setSelectedCard] = useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isOpenPopupWithConfirmation, setIsOpenPopupWithConfirmation] =
    useState(false);
  const [isOpenPopupPhoto, setIsOpenPopupPhoto] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleOpenPopupWiyhConfirmation = () => {
  setIsOpenPopupWithConfirmation(true);
  }

  const handleOpenPhotoPopup = () => {
    setIsOpenPopupPhoto(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsOpenPopupPhoto(false);
    setIsOpenPopupWithConfirmation(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onCardClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onPopupWithConfirmationClick={handleOpenPopupWiyhConfirmation}
        onPhotoPopupClick={handleOpenPhotoPopup}
      />
      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        textButton="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input_type_name popup__input"
          id="popup-input-name"
          type="text"
          name="name"
          placeholder="Имя"
          minlength="2"
          maxlength="40"
          required
        />
        <span className="popup__input-error" id="popup-input-name-error"></span>

        <input
          class="popup__input_type_job popup__input"
          id="popup-input-job"
          type="text"
          name="info"
          placeholder="О себе"
          minlength="2"
          maxlength="200"
          required
        />
        <span className="popup__input-error" id="popup-input-job-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="cards"
        textButton="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input_type_place popup__input"
          id="popup-input-place"
          type="text"
          name="name"
          placeholder="Название"
          minlength="2"
          maxlength="30"
          required
        />
        <span
          className="popup__input-error"
          id="popup-input-place-error"
        ></span>

        <input
          className="popup__input_type_link popup__input"
          id="popup-input-link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error" id="popup-input-link-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Вы уверены?"
        name="delete"
        textButton="Да"
        isOpen={isOpenPopupWithConfirmation}
        onClose={closeAllPopups}
      ></PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        textButton="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input_type_link popup__input popup__input-avatar"
          id="popup-input-avatar"
          type="url"
          name="link"
          placeholder="Ссылка на аватар"
          required
        />
        <span
          className="popup__input-error"
          id="popup-input-avatar-error"
        ></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isOpenPopupPhoto} />
    </div>
  );
}

export default App;
