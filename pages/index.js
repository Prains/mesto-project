const modal = document.querySelector('.overlay');
const profilebtn = document.querySelector('.profile__button');
const modalclose = document.querySelector('.overlay__close');
const modalsubmit = document.querySelector('.overlay__form');
const profilettl = document.querySelector('.profile__title');
const profdesc = document.querySelector('.profile__subtitle');
const modalname = document.getElementById('#modalname');
const modaldesc = document.getElementById('#modaldesc');
const popup = document.querySelector('.overlay_type_popup');
const addButton = document.querySelector('.profile__add-button');
const addClose = document.querySelector('.overlay_popup__close');
const popupSubmit = document.querySelector('.popup-form');
const template = document.querySelector('.element-template').content;
const elementLink = document.getElementById('#popuplink');
const elementTitle = document.getElementById('#popuptitle');
const elements = document.querySelector('.elements');
const renderedElements = [{
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
const maker = {
  createElement: function(link, title) {
    const element = template.querySelector('.element').cloneNode(true);
    element.querySelector('.element__title').textContent = title;
    element.querySelector('.element__image').src = link;
    element.querySelector('.element__image').alt = 'image';
    element.querySelector('.element__heart').addEventListener('click', function(e) {
      element.querySelector('.element__heart').classList.toggle('element__heart_liked');
    });
    element.querySelector('.element__image').addEventListener('click', function(e) {
      photoPopupImg.src = link;
      photoPopupText.textContent = title;
      photoPopup.classList.toggle('overlay_opened');
    });
    element.querySelector('.element__trash').addEventListener('click', function(e) {
      element.remove();
    });
    return element;
  },
  openPopup: function (popup) {
    popup.classList.add('overlay_opened');
  },
  closePopup: function (popup) {
    popup.classList.remove('overlay_opened');
  }
}
const photoPopup = document.querySelector('.overlay_type_image');
const photoPopupImg = photoPopup.querySelector('.photo__img');
const photoPopupText = photoPopup.querySelector('.photo__text');
const photoPopupClose = photoPopup.querySelector('.overlay_photo__close');

profilebtn.addEventListener('click', function(e) {
  maker.openPopup(modal);
});

addButton.addEventListener('click', function(e) {
  maker.openPopup(popup);
});

photoPopupClose.addEventListener('click', function(e) {
  maker.closePopup(photoPopup);
});

addClose.addEventListener('click', function(e) {
  maker.closePopup(popup);
});

modalsubmit.addEventListener('submit', function(e) {
  maker.closePopup(modal);
  updateData(e);
});

modalclose.addEventListener('click', function(e) {
  maker.closePopup(modal);
  resetData(e);
});

popupSubmit.addEventListener('submit', function(e) {
  maker.closePopup(popup);
  updateAndAdd(e);
});

function updateData(e) {
  e.preventDefault();
  profilettl.textContent = modalname.value;
  profdesc.textContent = modaldesc.value;
}

function updateAndAdd(e) {
  e.preventDefault();
  elements.prepend(maker.createElement(elementLink.value, elementTitle.value));
  popupSubmit.reset();
}

function resetData(e) {
  modalname.value = profilettl.textContent;
  modaldesc.value = profdesc.textContent;
}

for (var i = 0; i < 6; i++) {
  elements.prepend(maker.createElement(renderedElements[i].link, renderedElements[i].name));
}


// ovno kod
