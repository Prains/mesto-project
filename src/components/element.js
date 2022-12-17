import { template, photoPopupImg, photoPopupText, photoPopup } from '../components/variables.js'
export function createElement(data) {
    const element = template.querySelector(".element").cloneNode(true);
    element.querySelector(".element__title").textContent = data.name;
    element.querySelector(".element__image").src = data.link;
    element.querySelector(".element__image").alt = "image";
    element
        .querySelector(".element__heart")
        .addEventListener("click", function () {
            if (
                element
                    .querySelector(".element__heart")
                    .classList.contains("element__heart_liked")
            ) {
                element
                    .querySelector(".element__heart")
                    .classList.remove("element__heart_liked");
            } else {
                element
                    .querySelector(".element__heart")
                    .classList.add("element__heart_liked");
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
            element.remove();
        });

    return element;
}