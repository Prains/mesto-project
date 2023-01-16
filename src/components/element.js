import { template } from '../utils/constants'
import { addLikeOnCard, removeCardFromData, removeLikeFromCard } from './api';
import { openCard } from './popup.js';

export function createElement(data, userId) {
    const element = template.querySelector(".element").cloneNode(true);
    const image = element.querySelector(".element__image");
    const likeCounter = element.querySelector(".element__counter");
    const heart = element.querySelector(".element__heart");
    const trash = element.querySelector(".element__trash");
    const likeCounts = data.likes.length  

    likeCounter.textContent = likeCounts;
    element.querySelector(".element__title").textContent = data.name;
    image.src = data.link;
    image.alt = "image";

    if (userId !== data.owner._id) {
        trash.remove()
    }

    data.likes.forEach(like => {
        if (like._id === userId) {
            heart.classList.add('element__heart_liked')
        }
    });

    heart.addEventListener("click", function () {
        if (heart.classList.contains('element__heart_liked')) {
            removeLikeFromCard(data).then((data) => {
                likeCounter.textContent = data.likes.length;
                heart.classList.remove("element__heart_liked");
            })
        } else {
            addLikeOnCard(data).then((data) => {
                likeCounter.textContent = data.likes.length;
                heart.classList.add("element__heart_liked");
            })
        }
    });

    image.addEventListener("click", function (e) {
        openCard(data)
    });

    trash.addEventListener("click", function (e) {
        removeCardFromData(data).then(() => {
            element.remove();
        })
    });

    return element;
}