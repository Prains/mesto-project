export function hasInvalid(inputList) {
  for (let i = 0; i < inputList.length; i++) {
    if (!inputList[i].validity.valid) {
      return false;
    } else {
      return true;
    }
  }
}

export function validation(validate, text) {
  if (!validate.validity.valid) {
    text.textContent = validate.validationMessage;
    text.style.borderTop = '1px solid red';
  } else {
    text.textContent = "";
  }
}

export function buttonValidation(inputList, button) {
  console.log(hasInvalid(inputList));
  if (hasInvalid(inputList) === true) {
    button.disabled = false;
    button.classList.remove("disabled");
    button.classList.add("overlay__button");
  } else {
    button.disabled = true;
    button.classList.add("disabled");
    button.classList.remove("overlay__button");
  }
}

export function validateIt(listOfInput, button, input, text) {
  input.addEventListener('change', () => {
    buttonValidation(listOfInput, button);
    validation(input, text)
  })
}