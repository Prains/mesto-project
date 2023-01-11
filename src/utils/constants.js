
export const popupEditProfile = document.querySelector(".popup_edit-profile");
export const profilebtn = document.querySelector(".profile__button");
export const modalclose = document.querySelector(".overlay__close");
export const modalsubmit = document.querySelector(".overlay__form");
export const profilettl = document.querySelector(".profile__title");
export const profdesc = document.querySelector(".profile__subtitle");
export const modalname = document.getElementById("#modalname");
export const modaldesc = document.getElementById("#modaldesc");
export const popupAddCard = document.querySelector(".popup_add-card");
export const addButton = document.querySelector(".profile__add-button");
export const addClose = document.querySelector(".overlay_popup__close");
export const popupSubmit = document.querySelector(".popup-form");
export const template = document.querySelector(".element-template").content;
export const elementLink = document.getElementById("#popuplink");
export const elementTitle = document.getElementById("#popuptitle");
export const elements = document.querySelector(".elements");
export const photoPopup = document.querySelector(".overlay_type_image");
export const photoPopupImg = photoPopup.querySelector(".photo__img");
export const photoPopupText = photoPopup.querySelector(".photo__text");
export const photoPopupClose = photoPopup.querySelector(".overlay_photo__close");
export const profNameErr = document.getElementById("profnameerr");
export const profDescErr = document.getElementById("profdescerr");
export const addNameErr = document.getElementById("addnameerr");
export const addDescErr = document.getElementById("adddescerr");
export const modalButton = document.getElementById("modalbutton");
export const modalInputList = Array.from(
  modalsubmit.querySelectorAll(".overlay__text")
);
export const elementInputList = Array.from(
  popupSubmit.querySelectorAll(".overlay__text")
);
export const modalErrorList = Array.from(
  modalsubmit.querySelectorAll('.overlay__error')
);
export const elementErrorList = Array.from(
  popupSubmit.querySelectorAll('.overlay__error')
)
export const elementButton = document.getElementById("elementbutton");
export const profilePicture = document.querySelector('.profile__picture');
export const profileEditOverlay = document.querySelector('.profile__edit');
export const profileEditModal = document.querySelector('.avatar');
export const profileEditCloseButton = document.querySelector('.avatar__close');
export const profileEditForm = document.querySelector('.avatar__form');
export const profileEditInput = document.getElementById('avatarinput');
export const profileEditButton = document.querySelector('.avatar__submit');
export const profileEditError = document.getElementById('avatarerror');
export const initialElements = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];