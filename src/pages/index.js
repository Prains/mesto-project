import './index.css';
import * as v from '../components/variables.js'
import { hasInvalid, validation, buttonValidation, validateIt } from '../components/validation.js'
import { openPopup, closePopup } from '../components/popup.js'
import { createElement } from '../components/element.js'

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

v.profilettl.textContent = 'Жак-Ив Кусто';
v.profdesc.textContent = 'Исследователь океана';
v.modalname.value = v.profilettl.textContent;
v.modaldesc.value = v.profdesc.textContent;

v.profilePicture.addEventListener('mouseover', () => {
  v.profileEditOverlay.style.visibility = 'visible';
})

v.profileEditOverlay.addEventListener('mouseout', () => {
  v.profileEditOverlay.style.visibility = 'hidden';
})

v.profileEditOverlay.addEventListener('mouseover', () => {
  v.profileEditOverlay.style.visibility = 'visible';
})


validateIt(v.modalInputList, v.modalButton, v.modalname, v.profNameErr);
validateIt(v.modalInputList, v.modalButton, v.modaldesc, v.profDescErr);
validateIt(v.elementInputList, v.elementButton, v.elementTitle, v.addNameErr);
validateIt(v.elementInputList, v.elementButton, v.elementLink, v.addDescErr);


v.profileEditInput.addEventListener('change', () => {
  validation(v.profileEditInput, v.profileEditError);
  if (v.profileEditInput.validity.valid) {
    v.profileEditButton.disabled = false;
    v.profileEditButton.classList.remove("disabled");
    v.profileEditButton.classList.remove("overlay__button");
  } else {
    v.profileEditButton.disabled = true;
    v.profileEditButton.classList.remove("disabled");
    v.profileEditButton.classListremove("overlay__button");
  }
})

v.profilebtn.addEventListener("click", function (e) {
  openPopup(v.modal);
});

v.addButton.addEventListener("click", function (e) {
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
});

v.modalclose.addEventListener("click", function (e) {
  closePopup(v.modal);
  resetData(e);
});

v.popupSubmit.addEventListener("submit", function (e) {
  updateAndAdd(e);
});

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains("overlay") || evt.target.classList.contains("avatar") || evt.target.classList.contains("overlay_type_image") || evt.target.classList.contains("overlay_type_popup")) {
    closePopup(v.modal);
    closePopup(v.profileEditModal);
    closePopup(v.photoPopup);
    closePopup(v.popupEditProfile);
  }
});

document.addEventListener('keyup', (evt) => {
  if (evt.key === "Escape") {
    closePopup(v.modal);
    closePopup(v.photoPopup);
    closePopup(v.popupEditProfile);
    closePopup(v.profileEditModal);
  }
});


function updateData(e) {
  e.preventDefault();
  v.profilettl.textContent = v.modalname.value;
  v.profdesc.textContent = v.modaldesc.value;
  closePopup(v.modal);
}

function updateAndAdd(e) {
  e.preventDefault();
  let temp = {
    name: v.elementTitle.value,
    link: v.elementLink.value,
  }
  v.elements.prepend(createElement(temp));
  v.popupSubmit.reset();
  closePopup(v.popupEditProfile);
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
