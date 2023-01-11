import { modalInputList, modalButton, modalErrorList, elementInputList, elementButton, elementErrorList, profileEditInput, profileEditButton, profileEditError } from "../utils/constants.js";



export function hasInvalidInput(inputList) {
  for (let i = 0; i < inputList.length; i++) {
    if (!inputList[i].validity.valid)
      return false
  }
}

export function checkInputValidity(validate, text) {
  if (!validate.validity.valid) {
    addErrorText(validate, text)
  } else {
    removeErrorText(text)
  }
}

function addErrorText(input, text) {
  text.textContent = input.validationMessage;
  text.style.borderTop = '1px solid red';
}

function removeErrorText(text) {
  text.style.borderTop = '1px solid #CCCCCC';
  text.textContent = "";
}

export function toggleButtonState(inputList, button) {
  if (hasInvalidInput(inputList) === undefined) {
    button.disabled = false;
    button.classList.remove("disabled");
    button.classList.add("overlay__button");
  } else {
    button.disabled = true;
    button.classList.add("disabled");
    button.classList.remove("overlay__button");
  }
}

export function enableValidation() {
  for (let i = 0; i < listOfInputs.length; i++) {
    listOfInputs[i].addEventListener('input', () => {
      toggleButtonState(listOfInputs, button);
      checkInputValidity(listOfInputs[i], listOfErrors[i])
    })
  }
}

export function enableValidation() {
  validateIt(modalInputList, modalButton, modalErrorList);
  validateIt(elementInputList, elementButton, elementErrorList);
  validateIt(profileEditInput, profileEditButton, profileEditError);
}

const validaton = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};