const apiConfig = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-17/',
    headers: {
        authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
        'Content-Type': 'application/json'
    }
}
export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export function getInitialCards() {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        headers: apiConfig.headers
    }).then(res => checkResponse(res));
}

export function getInitialProfileData() {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
        headers: apiConfig.headers
    }).then(res => checkResponse(res));
}

export function removeLikeFromCard(data) {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${data._id}`, {
        method: 'delete',
        headers: apiConfig.headers
    }).then(res => checkResponse(res));
}

export function addLikeOnCard(data) {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${data._id}`, {
        method: 'put',
        headers: apiConfig.headers
    }).then(res => checkResponse(res));
}

export function sendProfileData(data) {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify(data)
    }).then(res => checkResponse(res))
}

export function updateProfileAvatar(url) {
    return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({
            avatar: url
        })
    })
}

export function addNewCard(data) {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        method: 'post',
        headers: {
            authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => checkResponse(res))
}

export function removeCardFromData(data) {
    return fetch(`${apiConfig.baseUrl}/cards/${data._id}`, {
        method: "delete",
        headers: {
            authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
        },
    }).then(res => checkResponse(res))
}