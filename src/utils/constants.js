//ВАЛИДАЦИЯ
export const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  inputErrorClass: "popup__input_type_error",
  buttonSelector: ".popup__button-save",
  buttonDisabledClass: "popup__button-save_disabled",
};

//выбираем кнопки, открывающую попап на странице - профиль, карточки
export const popupProfileOpenButton = document.querySelector(
  ".profile__button-edit"
);
export const popupCardsOpenButton = document.querySelector(
  ".profile__button-plus"
);
export const formCardPopup = document.forms["cardForm"];

//экзепмляры класса валидации для каждой формы
//находим форму в попапе профиля
export const formProfilePopup = document.querySelector(".popup__form-profile");



//большое фото
export const popupImgSelector = ".popup_section_photo";

//ЭКЗЕМПЛЯР CARD - наполнение карточек
export const selectorTemplate = "#galleryCards";
//avatar
export const formAvatarPopup = document.querySelector("#popup-form-avatar");
export const inputLinkAvatar = formAvatarPopup.querySelector(".popup__input-avatar");
export const popupEditAvatarOpenButton = document.querySelector(".profile__avatar-edit-button");
