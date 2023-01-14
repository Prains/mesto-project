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
  setTimeout(() => {
    document.addEventListener('click', (e) => {
      closeIfClickOnOverlay(e, tempPopup)
    }, { once: true });
  }, 250)
}

function closeIfClickOnOverlay(e, popup) {
  if (e.target.classList.contains('overlay')) {
    closePopup(popup)
  };
}

function setCloseByEscEventListener(tempPopup) {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closePopup(tempPopup);
    }
  }, { once: true })
}
