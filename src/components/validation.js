export function hasInvalid(inputList) {
  for (let i = 0; i < inputList.length; i++) {
    if (!inputList[i].validity.valid) {
      return inputList[i].validity.valid;
    }
  }
}

export function validation(validate, text) {
  if (!validate.validity.valid) {
    text.style.visibility = "visible";
    text.textContent = validate.validationMessage;
  } else {
    text.style.visibility = "hidden";
    text.textContent = "";
  }
}

export function buttonValidation(inputList, button) {
  if (hasInvalid(inputList) == undefined) {
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