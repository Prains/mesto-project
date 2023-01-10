import './index.css';
import * as v from '../components/variables.js'
import { hasInvalid, validation, buttonValidation, validateIt } from '../components/validation.js'
import { openPopup, closePopup } from '../components/popup.js'
import { createElement } from '../components/element.js'

v.profilePicture.addEventListener('mouseover', () => {
  v.profileEditOverlay.style.visibility = 'visible';
})

v.profileEditOverlay.addEventListener('mouseout', () => {
  v.profileEditOverlay.style.visibility = 'hidden';
})

v.profileEditOverlay.addEventListener('mouseover', () => {
  v.profileEditOverlay.style.visibility = 'visible';
})

const initialElements = [
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

for (var i = 0; i < initialElements.length; i++) {
  v.elements.append(createElement(initialElements[i]));
}


validateIt(v.modalInputList, v.modalButton, v.modalErrorList);
validateIt(v.elementInputList, v.elementButton, v.elementErrorList);
validateIt(v.profileEditInput, v.profileEditButton, v.profileEditError);


v.profilebtn.addEventListener("click", function (e) {
  v.modalname.value = v.profilettl.textContent;
  v.modaldesc.value = v.profdesc.textContent;
  openPopup(v.modal);
});

v.addButton.addEventListener("click", function (e) {
  e.preventDefault()
  buttonValidation(v.elementInputList, v.elementButton);
  openPopup(v.popupEditProfile);
});

v.photoPopupClose.addEventListener("click", function (e) {
  closePopup(v.photoPopup);
});

v.addClose.addEventListener("click", function (e) {
  closePopup(v.popupEditProfile);
});

v.modalsubmit.addEventListener("submit", function (e) {
  updateData(e);
  closePopup(v.modal);
});

v.modalclose.addEventListener("click", function (e) {
  closePopup(v.modal);
  resetData(e);
});

v.popupSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  let temp = {
    name: v.elementTitle.value,
    link: v.elementLink.value,
  }
  v.elements.prepend(createElement(temp));
  v.popupSubmit.reset();
  closePopup(v.popupEditProfile);
});


function updateData(e) {
  e.preventDefault();
  v.profilettl.textContent = v.modalname.value;
  v.profdesc.textContent = v.modaldesc.value;
}


function resetData(e) {
  v.modalname.value = v.profilettl.textContent;
  v.modaldesc.value = v.profdesc.textContent;
}


v.profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  v.profilePicture.src = v.profileEditInput.value;
  closePopup(v.profileEditModal);
})

v.profileEditOverlay.addEventListener('click', () => {
  v.profileEditInput.value = v.profilePicture.src;
  openPopup(v.profileEditModal);
});

v.profileEditCloseButton.addEventListener('click', () => {
  closePopup(v.profileEditModal);
  v.profileEditInput.value = v.profilePicture.src;
})

/* token c8f1a46c-65ef-455d-a389-1ba7850544c9 */

// ovno kod
