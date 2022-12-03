import { template, photoPopupImg, photoPopupText, photoPopup } from '../components/variables.js'
import { getInitialData } from './net.js';
export  function createElement(data) {
    getInitialData()
    .then(res => res.json())
    .then((res) => {
        if (res._id !== data.owner._id) {
            element.querySelector('.element__trash').style.visibility = 'hidden';
        }
    })
    const element = template.querySelector(".element").cloneNode(true);
    element.querySelector(".element__title").textContent = data.name;
    element.querySelector(".element__image").src = data.link;
    element.querySelector(".element__image").alt = "image";
    element.querySelector(".element__counter").textContent = data.likes.length;
     getInitialData()
        .then(res => res.json())
        .then((res) => {
            for (let i = 0; i < data.likes.length; i++) {
                if (data.likes[i]._id == res._id) {
                    element.querySelector(".element__heart").classList.add("element__heart_liked");
                }
            }
        })
    element
        .querySelector(".element__heart")
        .addEventListener("click", function () {
            if (
                element
                    .querySelector(".element__heart")
                    .classList.contains("element__heart_liked")
            ) {
                fetch(
                    `https://nomoreparties.co/v1/plus-cohort-17/cards/likes/${data._id}`,
                    {
                        method: "delete",
                        headers: {
                            authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
                        },
                    }
                )
                    .then(res => res.json())
                    .then((res) => {
                        element
                            .querySelector(".element__heart")
                            .classList.remove("element__heart_liked");
                        element.querySelector(".element__counter").textContent = res.likes.length;
                        console.log(res);
                    });
            } else {
                fetch(
                    `https://nomoreparties.co/v1/plus-cohort-17/cards/likes/${data._id}`,
                    {
                        method: "put",
                        headers: {
                            authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
                        },
                    }
                )
                    .then(res => res.json())
                    .then((res) => {
                        element
                            .querySelector(".element__heart")
                            .classList.add("element__heart_liked");
                        element.querySelector(".element__counter").textContent = res.likes.length;
                        console.log(res);
                    });
            }
        });
    element
        .querySelector(".element__image")
        .addEventListener("click", function (e) {
            photoPopupImg.src = data.link;
            photoPopupText.textContent = data.title;
            photoPopup.classList.toggle("overlay_opened");
        });

    element
        .querySelector(".element__trash")
        .addEventListener("click", function (e) {
            fetch(`https://nomoreparties.co/v1/plus-cohort-17/cards/${data._id}`, {
                method: "delete",
                headers: {
                    authorization: "c8f1a46c-65ef-455d-a389-1ba7850544c9",
                },
            }).then(() => {
                element.remove();
            });
        });

    return element;
}