import './index.css';
import { validationSelectors, popupEditProfile, profilebtn, buttonCloseFormEditProfile, formEditProfile, userName, userDescription, inputUserName, inputUserDescription, popupAddCard, addButton, addClose, formAddCard, elementLink, elementTitle, elements, photoPopup, photoPopupClose, profilePicture, profileEditOverlay, profileEditCloseButton, profileEditForm, profileEditInput, profileEditModal, initialElements } from '../utils/constants.js'
import { enableValidation } from '../components/validation.js'
import { openPopup, closePopup } from '../components/popup.js'
import { createElement } from '../components/element.js'

profilePicture.addEventListener('mouseover', () => {
  profileEditOverlay.style.visibility = 'visible';
})

profileEditOverlay.addEventListener('mouseout', () => {
  profileEditOverlay.style.visibility = 'hidden';
})

profileEditOverlay.addEventListener('mouseover', () => {
  profileEditOverlay.style.visibility = 'visible';
})


for (var i = 0; i < initialElements.length; i++) {
  elements.append(createElement(initialElements[i]));
}

enableValidation(validationSelectors);


profilebtn.addEventListener("click", function () {
  inputUserName.value = userName.textContent;
  inputUserDescription.value = userDescription.textContent;
  openPopup(popupEditProfile);
});

addButton.addEventListener("click", function (e) {
  e.preventDefault()
  openPopup(popupAddCard);
});

photoPopupClose.addEventListener("click", function (e) {
  closePopup(photoPopup);
});

addClose.addEventListener("click", function (e) {
  closePopup(popupAddCard);
});

formEditProfile.addEventListener("submit", function (e) {
  updateUserData(e);
  closePopup(popupEditProfile);
});

buttonCloseFormEditProfile.addEventListener("click", function (e) {
  closePopup(popupEditProfile);
  fillInFormInputs();
});

formAddCard.addEventListener("submit", function (e) {
  e.preventDefault();
  const cardData = {
    name: elementTitle.value,
    link: elementLink.value,
  }
  elements.prepend(createElement(cardData));
  formAddCard.reset();
  closePopup(popupAddCard);
});


function updateUserData(e) {
  e.preventDefault();
  userName.textContent = inputUserName.value;
  userDescription.textContent = inputUserDescription.value;
}


function fillInFormInputs() {
  inputUserName.value = userName.textContent;
  inputUserDescription.value = userDescription.textContent;
}


profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  profilePicture.src = profileEditInput.value;
  closePopup(profileEditModal);
})

profileEditOverlay.addEventListener('click', () => {
  profileEditInput.value = profilePicture.src;
  openPopup(profileEditModal);
});

profileEditCloseButton.addEventListener('click', () => {
  closePopup(profileEditModal);
  profileEditInput.value = profilePicture.src;
})

/* token c8f1a46c-65ef-455d-a389-1ba7850544c9 */