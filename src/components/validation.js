


export function hasInvalidInput(inputList) {
  for (let i = 0; i < inputList.length; i++) {
    if (!inputList[i].validity.valid)
      return false
  }
}

export function checkInputValidity(formElement, inputElement, settings) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    addErrorText(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    removeErrorText(formElement, inputElement, settings);
  }
}

function addErrorText(formElement, inputElement, errorMessage, settings) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove('unerror')
  errorElement.classList.add('error');
  errorElement.textContent = errorMessage;
}

function removeErrorText(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove('error')
  errorElement.classList.add('unerror');
  errorElement.textContent = '';
}

export function toggleButtonState(inputList, buttonElement, settings) {
  console.log(hasInvalidInput(inputList))
  if (hasInvalidInput(inputList) === false) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
}

export function makeValidationListeners(formElement, settings) {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
}

export function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((formElement) => {
    makeValidationListeners(formElement, settings);
  });
}