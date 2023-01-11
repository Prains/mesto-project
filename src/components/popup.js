import { photoPopupImg, photoPopupText, photoPopup } from '../utils/constants'

export function openPopup(popup) {
  popup.classList.add("overlay_opened");
  setCloseByOverlayClickEventListener(popup);
  setCloseByEscEventListener(popup);
}

export function closePopup(popup) {
  popup.classList.remove("overlay_opened");
}

export function openCard(data, popup) {
  photoPopupImg.src = data.link;
  photoPopupImg.alt = data.name;
  photoPopupText.textContent = data.name;
  openPopup(photoPopup)
}

function setCloseByOverlayClickEventListener(tempPopup) {
  tempPopup.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay_type')) {
      closePopup(tempPopup)
    };
  }, {once:true});
}

function setCloseByEscEventListener(tempPopup) {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closePopup(tempPopup);
    }
  }, { once: true })
}