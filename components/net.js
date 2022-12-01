import * as v from '../components/variables.js'
import { createElement } from './element.js';

export function getInitialCards() {
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
}

export function getInitialData() {
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
}

export function sendProfileData(temp) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-17/users/me", {
    method: 'PATCH',
    headers: {
      authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(temp)
  })
}

export function makeNewCard(temp) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-17/cards", {
    method: 'post',
    headers: {
      authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(temp)
  })
}

