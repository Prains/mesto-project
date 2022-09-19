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
const popupSubmit = document.querySelector('.overlay_popup__submit');
const template = document.querySelector('.element-template').content;
const elementLink = document.getElementById('#popuplink');
const elementTitle = document.getElementById('#popuptitle');
const elements = document.querySelector('.elements');
const renderedElements = ['./images/argent.webp', "Аргент Д'Нур"];
const photoPopup = document.querySelector('.overlay_photo__popup');
const photoPopupImg = photoPopup.querySelector('.photo__img');
const photoPopupText = photoPopup.querySelector('.photo__text');
const photoPopupClose = photoPopup.querySelector('.overlay_photo__close');
for (var i = 0; i < 6; i++) {
  const element = template.querySelector('.element').cloneNode(true);
  element.querySelector('.element__title').textContent = renderedElements[1];
  element.querySelector('.element__image').src = renderedElements[0];
  const trash = element.querySelector('.element__trash');
  const heart = element.querySelector('.element__heart');
  heart.addEventListener('click', function(e) {
    heart.classList.toggle('element__heart_liked');
  });
element.querySelector('.element__image').addEventListener('click', function(e) {
    photoPopup.classList.toggle('overlay_opened');
    photoPopupImg.src = renderedElements[0];
    photoPopupText.textContent = renderedElements[1];
  });
  trash.addEventListener('click', function(e) {
    element.remove();
  });
  elements.prepend(element);
}
photoPopupClose.addEventListener('click', function(e) {
  photoPopup.classList.toggle('overlay_opened');
});
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

addClose.addEventListener('click', function(e) {
  popup.classList.toggle('overlay_opened');
});

popupSubmit.addEventListener('click', function(e) {
  e.preventDefault();
  popup.classList.toggle('overlay_opened');
  const element = template.querySelector('.element').cloneNode(true);
  element.querySelector('.element__title').textContent = elementTitle.value;
  element.querySelector('.element__image').src = elementLink.value;
    const trash = element.querySelector('.element__trash');
  const heart = element.querySelector('.element__heart');
  heart.addEventListener('click', function(e) {
    heart.classList.toggle('element__heart_liked');
  });
  element.querySelector('.element__image').addEventListener('click', function(e) {
    photoPopup.classList.toggle('overlay_opened');
    photoPopupImg.src = elementLink.value;
    photoPopupText.textContent = elementTitle.value;
  });
  trash.addEventListener('click', function(e) {
    element.remove();
  });
  elements.prepend(element);
});

makeItPopup(profilebtn, modal);

makeItPopup(addButton, popup);



function makeItPopup(btn, popup) {
  btn.addEventListener('click', function(e) {
    popup.classList.toggle('overlay_opened');
  });
}
// ovno kod 
