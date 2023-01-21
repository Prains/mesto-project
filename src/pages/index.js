import './index.css';
import { validationSelectors, popupEditProfile, profilebtn, buttonCloseFormEditProfile, formEditProfile, userName, userDescription, inputUserName, inputUserDescription, popupAddCard, addButton, addClose, formAddCard, elementLink, elementTitle, elementButton, elements, photoPopup, photoPopupClose, profilePicture, profileEditOverlay, profileEditCloseButton, profileEditForm, profileEditInput, profileEditModal } from '../utils/constants.js'
import { enableValidation, resetButton } from '../components/validation.js'
import { openPopup, closePopup } from '../components/modal.js'
import { createElement } from '../components/card.js'
import { addNewCard, getInitialCards, getInitialProfileData, sendProfileData, updateProfileAvatar } from '../components/api';

profilePicture.addEventListener('mouseover', () => {
  profileEditOverlay.classList.add('overlay__avatar-visible')
})

profileEditOverlay.addEventListener('mouseout', () => {
  profileEditOverlay.classList.remove('overlay__avatar-visible')
})

profileEditOverlay.addEventListener('mouseover', () => {
  profileEditOverlay.classList.add('overlay__avatar-visible')
})

let userId

Promise.all([getInitialCards(), getInitialProfileData()]).then(([cards, user]) => {
  for (var i = 0; i < cards.length; i++) {
    elements.append(createElement(cards[i], user._id));
  }
  userId = user._id
  userName.textContent = user.name;
  userDescription.textContent = user.about;
  profilePicture.src = user.avatar;
})


enableValidation(validationSelectors);


profilebtn.addEventListener("click", function () {
  fillInFormInputs();
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
  updateUserData(e, formEditProfile);
});

buttonCloseFormEditProfile.addEventListener("click", function (e) {
  closePopup(popupEditProfile);
});

formAddCard.addEventListener("submit", function (e) {
  elementButton.textContent = 'Сохранение...'
  e.preventDefault();
  const cardData = {
    name: elementTitle.value,
    link: elementLink.value,
  }
  addNewCard(cardData).then((data) => {
    elementButton.textContent = 'Создать'
    resetButton(elementButton)
    elements.prepend(createElement(data, userId));
    formAddCard.reset();
    closePopup(popupAddCard);
  }).catch((err) => {
    console.error(err);
  })
});


function updateUserData(e, form) {
  const formSubmitButton = form.querySelector('.overlay__button')
  formSubmitButton.textContent = 'Сохранение...'
  e.preventDefault();
  const profileData = {
    name: inputUserName.value,
    about: inputUserDescription.value
  }
  sendProfileData(profileData).then((res) => {
    formSubmitButton.textContent = 'Сохранить'
    resetButton(formSubmitButton)
    userName.textContent = res.name;
    userDescription.textContent = res.about;
    closePopup(popupEditProfile);
  }).catch((err) => {
    console.error(err);
  })
}


function fillInFormInputs() {
  inputUserName.value = userName.textContent;
  inputUserDescription.value = userDescription.textContent;
}


profileEditForm.addEventListener('submit', (e) => {
  const formSubmitButton = profileEditForm.querySelector('.overlay__button')
  formSubmitButton.textContent = 'Сохранение...'
  e.preventDefault();
  updateProfileAvatar(profileEditInput.value).then(() => {
    formSubmitButton.textContent = 'Сохранить'
    resetButton(formSubmitButton)
    profilePicture.src = profileEditInput.value;
    profileEditForm.reset();
    closePopup(profileEditModal);
  }).catch((err) => {
    console.error(err);
  })
})

profileEditOverlay.addEventListener('click', () => {
  openPopup(profileEditModal);
});

profileEditCloseButton.addEventListener('click', () => {
  closePopup(profileEditModal);
})

/* token c8f1a46c-65ef-455d-a389-1ba7850544c9 */