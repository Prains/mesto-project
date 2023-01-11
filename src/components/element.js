import { template } from '../utils/constants'
import { openCard } from './popup.js';
export function createElement(data) {
    const element = template.querySelector(".element").cloneNode(true);
    const image = element.querySelector(".element__image");
    element.querySelector(".element__title").textContent = data.name;
    image.src = data.link;
    image.alt = "image";
    element
        .querySelector(".element__heart")
        .addEventListener("click", function () {
            element
                .querySelector(".element__heart")
                .classList.toggle("element__heart_liked");
        });
    image.addEventListener("click", function (e) {F
        openCard(data, popup)
    });

    element
        .querySelector(".element__trash")
        .addEventListener("click", function (e) {
            element.remove();
        });

    return element;
}