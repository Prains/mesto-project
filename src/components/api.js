export function getInitialCards() {
    return fetch("https://nomoreparties.co/v1/plus-cohort-17/cards", {
        headers: {
            authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
        },
    }).then(res => res.json());
}

export function getInitialProfileData() {
    return fetch("https://nomoreparties.co/v1/plus-cohort-17/users/me", {
        headers: {
            authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
        },
    }).then(res => res.json());
}

export function removeLikeFromCard(data) {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-17/cards/likes/${data._id}`, {
        method: 'delete',
        headers: {
            authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
        },
    }).then(res => res.json());
}

export function addLikeOnCard(data) {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-17/cards/likes/${data._id}`, {
        method: 'put',
        headers: {
            authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
        },
    }).then(res => res.json());
}

export function sendProfileData(data) {
    return fetch("https://nomoreparties.co/v1/plus-cohort-17/users/me", {
        method: 'PATCH',
        headers: {
            authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}

export function updateProfileAvatar(url) {
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

export function addNewCard(data) {
    return fetch("https://nomoreparties.co/v1/plus-cohort-17/cards", {
        method: 'post',
        headers: {
            authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}

export function removeCardFromData(data) {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-17/cards/${data._id}`, {
        method: "delete",
        headers: {
            authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
        },
    }).then(res => res.json())
}