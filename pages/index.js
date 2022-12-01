import * as v from '../components/variables.js'
import { hasInvalid, validation, buttonValidation, validateIt } from '../components/validation.js'
import { openPopup, closePopup } from '../components/popup.js'
import { createElement } from '../components/element.js'
import { getInitialCards, getInitialData, makeNewCard, sendProfileData } from '../components/net.js'


getInitialCards();
getInitialData();

$(v.profilePicture).mouseover(() => {
  v.profileEditOverlay.style.visibility = 'visible';
})

$(v.profileEditOverlay).mouseout(() => {
  v.profileEditOverlay.style.visibility = 'hidden';
})

$(v.profileEditOverlay).mouseover(() => {
  v.profileEditOverlay.style.visibility = 'visible';
})


validateIt(v.modalInputList, v.modalButton, v.modalname, v.profNameErr);
validateIt(v.modalInputList, v.modalButton, v.modaldesc, v.profDescErr);
validateIt(v.elementInputList, v.elementButton, v.elementTitle, v.addNameErr);
validateIt(v.elementInputList, v.elementButton, v.elementLink, v.addDescErr);


$(v.profileEditInput).change(() => {
  validation(v.profileEditInput, v.profileEditError);
  if (v.profileEditInput.validity.valid) {
    v.profileEditButton.disabled = false;
    $(v.profileEditButton).removeClass("disabled");
    $(v.profileEditButton).addClass("overlay__button");
  } else {
    v.profileEditButton.disabled = true;
    $(v.profileEditButton).addClass("disabled");
    $(v.profileEditButton).removeClass("overlay__button");
  }
})

v.profilebtn.addEventListener("click", function (e) {
  openPopup(v.modal);
});

v.addButton.addEventListener("click", function (e) {
  buttonValidation(v.elementInputList, v.elementButton);
  openPopup(v.popup);
});

v.photoPopupClose.addEventListener("click", function (e) {
  closePopup(v.photoPopup);
});

v.addClose.addEventListener("click", function (e) {
  closePopup(v.popup);
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

$(document).click((evt) => {
  if (evt.target.classList.contains("overlay") || evt.target.classList.contains("avatar") || evt.target.classList.contains("overlay_type_image") || evt.target.classList.contains("overlay_type_popup")) {
    closePopup(v.modal);
    closePopup(v.profileEditModal);
    closePopup(v.photoPopup);
    closePopup(v.popup);
  }
});

$(document).keyup((evt) => {
  if (evt.key === "Escape") {
    closePopup(v.modal);
    closePopup(v.photoPopup);
    closePopup(v.popup);
    closePopup(v.profileEditModal);
  }
});


function updateData(e) {
  e.preventDefault();
  let temp = {
    name: v.modalname.value,
    about: v.modaldesc.value,
    avatar: v.profileEditInput.value
  }
  sendProfileData(temp)
    .then((res) => res.json())
    .then((res) => {
      v.profilettl.textContent = res.name;
      v.profdesc.textContent = res.about;
      closePopup(v.modal);
    })
}

function updateAndAdd(e) {
  e.preventDefault();
  let temp = {
    name: v.elementTitle.value,
    link: v.elementLink.value,
    owner: {
      name: v.profilettl.textContent,
      about: v.profdesc.textContent
    },
    likes: [
    ]
  }
  makeNewCard(temp)
    .then(res => res.json())
    .then((res) => {
      v.elements.prepend(createElement(res));
      v.popupSubmit.reset();
      closePopup(v.popup);
    })
}

function resetData(e) {
  v.modalname.value = v.profilettl.textContent;
  v.modaldesc.value = v.profdesc.textContent;
}


$(v.profileEditForm).submit((e) => {
  e.preventDefault();
  let temp = {
    name: v.modalname.value,
    about: v.modaldesc.value,
    avatar: v.profileEditInput.value
  }
 sendProfileData(temp)
    .then(() => {
      v.profilePicture.src = $(v.profileEditInput).val();
      closePopup(v.profileEditModal);
    });
})

v.profileEditOverlay.addEventListener('click', () => {
  $(v.profileEditInput).val(v.profilePicture.src);
  openPopup(v.profileEditModal);
});

v.profileEditCloseButton.addEventListener('click', () => {
  closePopup(v.profileEditModal);
  $(v.profileEditInput).val(v.profilePicture.src);
})
/* token c8f1a46c-65ef-455d-a389-1ba7850544c9 */

// ovno kod
