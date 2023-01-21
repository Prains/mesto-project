import { photoPopupImg, photoPopupText, photoPopup } from '../utils/constants'

const popups = document.querySelectorAll('.overlay');

export function openPopup(popup) {
  document.addEventListener('keyup', closeByEsc)
  popup.classList.add("overlay_opened");
}

export function closePopup(popup) {
  document.removeEventListener('keyup', closeByEsc)
  popup.classList.remove("overlay_opened");
}

export function openCard(data, popup) {
  photoPopupImg.src = data.link;
  photoPopupImg.alt = data.name;
  photoPopupText.textContent = data.name;
  openPopup(photoPopup)
}

function closeByEsc(e) {
  const openedPopup = document.querySelector('.overlay_opened')
  if (e.key === 'Escape') {
    closePopup(openedPopup);
  }
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('overlay_opened')) closePopup(popup);
  })
})