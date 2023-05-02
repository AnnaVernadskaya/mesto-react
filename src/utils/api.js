//новый класс в котором сосредоточена логика запрсов к api
export default class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
}

  //Загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  // Загрузка карточек с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  //Редактирование профиля
  editUserInfo({name, about}) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => this._getResponseData(res));
  }

  //Обновление аватара пользователя
  editAvatar(url) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => this._getResponseData(res));
  }

  //удаление карточки
  deleteCard(idCard) {
    return fetch(`${this._url}/cards/${idCard}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  //Добавление новой карточки
  addNewCard({name, link}) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => this._getResponseData(res));
  }

  // лайк 
toggleButtonLike (idCard, isLiked) {
  if(isLiked) {
    return fetch(`${this._url}/cards/${idCard}/likes/`, {
    method: "PUT",
    headers: this._headers,
  }).then((res) => this._getResponseData(res))
} else {
  return fetch(`${this._url}/cards/${idCard}/likes/`, {
    method: "DELETE",
    headers: this._headers,
  }).then((res) => this._getResponseData(res))
  }
}

}

//Токен: 415a5d47-5581-45eb-947d-68b262607101
//Идентификатор группы: cohort-62"

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    "content-type": "application/json",
    authorization: "415a5d47-5581-45eb-947d-68b262607101",
  },
});

export { api }; 
