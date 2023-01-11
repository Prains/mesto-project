import './index.css';
import { popupEditProfile, profilebtn, modalclose, modalsubmit, profilettl, profdesc, modalname, modaldesc, popupAddCard, addButton, addClose, popupSubmit, elementLink, elementTitle, elements, photoPopup, photoPopupClose, profilePicture, profileEditOverlay, profileEditCloseButton, profileEditForm, profileEditInput, profileEditModal, initialElements } from '../utils/constants.js'
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


enableValidation();


profilebtn.addEventListener("click", function (e) {
  modalname.value = profilettl.textContent;
  modaldesc.value = profdesc.textContent;
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

modalsubmit.addEventListener("submit", function (e) {
  updateData(e);
  closePopup(popupEditProfile);
});

modalclose.addEventListener("click", function (e) {
  closePopup(popupEditProfile);
  resetData(e);
});

popupSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  const temp = {
    name: elementTitle.value,
    link: elementLink.value,
  }
  elements.prepend(createElement(temp));
  popupSubmit.reset();
  closePopup(popupAddCard);
});


function updateData(e) {
  e.preventDefault();
  profilettl.textContent = modalname.value;
  profdesc.textContent = modaldesc.value;
}


function resetData(e) {
  modalname.value = profilettl.textContent;
  modaldesc.value = profdesc.textContent;
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

