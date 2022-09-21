const modal = document.querySelector('.overlay');
const profilebtn = document.querySelector('.profile__button');
const modalclose = document.querySelector('.overlay__close');
const modalsubmit = document.querySelector('.overlay__form');
const profilettl = document.querySelector('.profile__title');
const profdesc = document.querySelector('.profile__subtitle');
const modalname = document.getElementById('#modalname');
const modaldesc = document.getElementById('#modaldesc');
const popup = document.querySelector('.overlay_popup');
const addButton = document.querySelector('.profile__add-button');
const addClose = document.querySelector('.overlay_popup__close');
const popupSubmit = document.querySelector('.popup-form');
const template = document.querySelector('.element-template').content;
const elementLink = document.getElementById('#popuplink');
const elementTitle = document.getElementById('#popuptitle');
const elements = document.querySelector('.elements');
const renderedElements = [
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
]
const photoPopup = document.querySelector('.overlay_type__image');
const photoPopupImg = photoPopup.querySelector('.photo__img');
const photoPopupText = photoPopup.querySelector('.photo__text');
const photoPopupClose = photoPopup.querySelector('.overlay_photo__close');

for (var i = 0; i < 6; i++) {
  createElement(renderedElements[i].link, renderedElements[i].name);
}

makeItPopup(photoPopupClose, photoPopup);

modalsubmit.addEventListener('submit', function(e) {
  e.preventDefault();
  modal.classList.toggle('overlay_opened');
  profilettl.textContent = modalname.value;
  profdesc.textContent = modaldesc.value;
});

modalclose.addEventListener('click', function(e) {
  modal.classList.toggle('overlay_opened');
  modalname.value = profilettl.textContent;
  modaldesc.value = profdesc.textContent;
});

makeItPopup(addClose, popup);

popupSubmit.addEventListener('submit', function(e) {
  e.preventDefault();
  popup.classList.toggle('overlay_opened');
  createElement(elementLink.value, elementTitle.value);
  popupSubmit.reset();
});

makeItPopup(profilebtn, modal);

makeItPopup(addButton, popup);

function createElement (link, title) {
  const element = template.querySelector('.element').cloneNode(true);
  element.querySelector('.element__title').textContent = title;
  element.querySelector('.element__image').src = link;
  element.querySelector('.element__image').alt = 'image';
    const trash = element.querySelector('.element__trash');
  const heart = element.querySelector('.element__heart');
  heart.addEventListener('click', function(e) {
    heart.classList.toggle('element__heart_liked');
  });
  element.querySelector('.element__image').addEventListener('click', function(e) {
    photoPopupImg.src = link;
    photoPopupText.textContent = title;
    photoPopup.classList.toggle('overlay_opened');
  });
  trash.addEventListener('click', function(e) {
    element.remove();
  });
  elements.prepend(element);
}


function makeItPopup(btn, popup) {
  btn.addEventListener('click', function(e) {
    popup.classList.toggle('overlay_opened');
  });
}
// ovno kod
