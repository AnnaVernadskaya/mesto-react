import React, {useRef, useEffect} from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatarPhoto = useRef();

    useEffect(() => {
            avatarPhoto.current.value = '';
    }, [isOpen])

function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar(avatarPhoto.current.value);
}

return (
    <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        textButton="Сохранить"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        >
        <input
            className="popup__input_type_link popup__input popup__input-avatar"
            id="popup-input-avatar"
            type="url"
            name="link"
            placeholder="Ссылка на аватар"
            required
            ref={avatarPhoto}
        />
        <span
            className="popup__input-error"
            id="popup-input-avatar-error"
        ></span>
        </PopupWithForm>
)
}

export default EditAvatarPopup;