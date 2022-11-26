import * as v from '../components/variables.js'
import { hasInvalid, validation, buttonValidation } from '../components/validation.js'
import { openPopup, closePopup } from '../components/popup.js'
import { createElement } from '../components/element.js'

let renderedElements = {};


fetch("https://nomoreparties.co/v1/plus-cohort-17/cards", {
  headers: {
    authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
  },
})
  .then((res) => res.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      v.elements.append(createElement(data[i]));
    }
  });
fetch("https://nomoreparties.co/v1/plus-cohort-17/users/me", {
  headers: {
    authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
  },
})
  .then((res) => res.json())
  .then((data) => {
    v.profilettl.textContent = data.name
    v.profdesc.textContent = data.about
    v.profilePicture.src = data.avatar
    v.modalname.value = data.name
    v.modaldesc.value = data.about
  })

































$(v.profilePicture).mouseover(() => {
  v.profileEditOverlay.style.visibility = 'visible';
})

$(v.profileEditOverlay).mouseout(() => {
  v.profileEditOverlay.style.visibility = 'hidden';
})

$(v.profileEditOverlay).mouseover(() => {
  v.profileEditOverlay.style.visibility = 'visible';
})

$(v.modalname).change(() => {
  buttonValidation(v.modalInputList, v.modalButton);
  validation(v.modalname, v.profNameErr);
});

$(v.modaldesc).change(() => {
  buttonValidation(v.modalInputList, v.modalButton);
  validation(v.modaldesc, v.profDescErr);
});

$(v.elementTitle).change(() => {
  buttonValidation(v.elementInputList, v.elementButton);
  validation(v.elementTitle, v.addNameErr);
});

$(v.elementLink).change(() => {
  buttonValidation(v.elementInputList, v.elementButton);
  validation(v.elementLink, v.addDescErr);
});

$(v.profileEditInput).change(()=>{
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
  closePopup(v.modal);
  updateData(e);
});

v.modalclose.addEventListener("click", function (e) {
  closePopup(v.modal);
  resetData(e);
});

v.popupSubmit.addEventListener("submit", function (e) {
  closePopup(v.popup);
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
  fetch("https://nomoreparties.co/v1/plus-cohort-17/users/me", {
    method: 'PATCH',
    headers: {
      authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: v.modalname.value,
      about: v.modaldesc.value
    })
  })
    .then(res => res.json())
    .finally((res) => { console.log(res) })
  v.profilettl.textContent = v.modalname.value;
  v.profdesc.textContent = v.modaldesc.value;
}

function updateAndAdd(e) {
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
  fetch("https://nomoreparties.co/v1/plus-cohort-17/cards", {
    method: 'post',
    headers: {
      authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(temp)
  })
  e.preventDefault();
  v.elements.prepend(createElement(temp));
  v.popupSubmit.reset();
}

function resetData(e) {
  v.modalname.value = v.profilettl.textContent;
  v.modaldesc.value = v.profdesc.textContent;
}


$(v.profileEditForm).submit((e) => {
  e.preventDefault();
})

$(v.profileEditOverlay).click(() => {
  $(v.profileEditInput).val(v.profilePicture.src);
  openPopup(v.profileEditModal);
});

$(v.profileEditCloseButton).click(() => {
  closePopup(v.profileEditModal);
  $(v.profileEditInput).val(v.profilePicture.src);
})
/* token c8f1a46c-65ef-455d-a389-1ba7850544c9 */

// ovno kod
