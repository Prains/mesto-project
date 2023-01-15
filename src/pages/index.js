import './index.css';
import { validationSelectors, popupEditProfile, profilebtn, buttonCloseFormEditProfile, formEditProfile, userName, userDescription, inputUserName, inputUserDescription, popupAddCard, addButton, addClose, formAddCard, elementLink, elementTitle, elements, photoPopup, photoPopupClose, profilePicture, profileEditOverlay, profileEditCloseButton, profileEditForm, profileEditInput, profileEditModal } from '../utils/constants.js'
import { enableValidation } from '../components/validation.js'
import { openPopup, closePopup } from '../components/popup.js'
import { createElement } from '../components/element.js'
import { addNewCard, getInitialCards, getInitialProfileData, sendProfileData, updateProfileAvatar } from '../components/api';

profilePicture.addEventListener('mouseover', () => {
  profileEditOverlay.style.visibility = 'visible';
})

profileEditOverlay.addEventListener('mouseout', () => {
  profileEditOverlay.style.visibility = 'hidden';
})

profileEditOverlay.addEventListener('mouseover', () => {
  profileEditOverlay.style.visibility = 'visible';
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
  addNewCard(cardData).then((data) => {
    console.log(data)
    elements.prepend(createElement(data, userId));
    formAddCard.reset();
    closePopup(popupAddCard);
  })
});


function updateUserData(e) {
  e.preventDefault();
  const profileData = {
    name: inputUserName.value,
    about: inputUserDescription.value
  }
  sendProfileData(profileData).then((res) => {
    userName.textContent = res.name;
    userDescription.textContent = res.about;
  })
}


function fillInFormInputs() {
  inputUserName.value = userName.textContent;
  inputUserDescription.value = userDescription.textContent;
}


profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  updateProfileAvatar(profileEditInput.value).then((res) => {
    profilePicture.src = res.avatar;
  })
  profilePicture.src = profileEditInput.value;
  closePopup(profileEditModal);
})

profileEditOverlay.addEventListener('click', () => {
  profileEditInput.value = profilePicture.src;
  openPopup(profileEditModal);
});

profileEditCloseButton.addEventListener('click', () => {
  closePopup(profileEditModal);
  updateProfileAvatar(profileEditInput.value).then((res) => {
    console.log(res)
  })
  profileEditInput.value = profilePicture.src;
})

/* token c8f1a46c-65ef-455d-a389-1ba7850544c9 */