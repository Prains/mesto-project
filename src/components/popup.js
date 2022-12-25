
export function openPopup(popup) {
  const tempPopup = popup;
  popup.classList.add("overlay_opened");
  closeIfClickOverlay(tempPopup);
  closeIfEsc(tempPopup);
}

export function closePopup(popup) {
  popup.classList.remove("overlay_opened");
}

export function openCard(data, popup) {
  popup.img.src = data.link;
  popup.img.alt = data.name;
  popup.text.textContent = data.name;
  openPopup(popup.overlay)
}

function closeIfClickOverlay(tempPopup) {
  tempPopup.addEventListener('click', (e) => {
    if (~e.target.classList.toString().indexOf('overlay_type')) {
      closePopup(tempPopup)
    };
  });
}

function closeIfEsc(tempPopup) {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closePopup(tempPopup);
    }
  })
}