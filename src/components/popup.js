
export function openPopup(popup) {
  popup.classList.add("overlay_opened");
  document.addEventListener('keyup', (popup) => {
    checkEsc(popup)
  });
  document.addEventListener('click', (popup) => {
    checkIsOverlay(popup)
  })
}

export function closePopup(popup) {
  popup.classList.remove("overlay_opened");
  document.removeEventListener('keyup', (popup) => {
    checkEsc(popup)
  })
  document.removeEventListener('click', (popup) => {
    checkIsOverlay(popup)
  })
}

export function openCard(data, popup) {
  popup.img.src = data.link;
  popup.img.alt = data.name;
  popup.text.textContent = data.name;
  openPopup(popup.overlay)
}

function checkEsc(evt, popup) {
  if (evt.key === "Escape") closePopup(popup);
}
function checkIsOverlay(evt, popup) {
  if (evt.target === popup) closePopup(popup);
}