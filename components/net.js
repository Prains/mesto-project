
export function getInitialCards() {
    return fetch("https://nomoreparties.co/v1/plus-cohort-17/cards", {
  headers: {
    authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
  },
})
}

export function getInitialData() {
    return fetch("https://nomoreparties.co/v1/plus-cohort-17/users/me", {
  headers: {
    authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
  },
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

export function sendProfileAvatar(url) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-17/users/me/avatar", {
    method: 'PATCH',
    headers: {
      authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: url
    })
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
