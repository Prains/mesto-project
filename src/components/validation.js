

export function hasInvalid(inputList) {
  for (let i = 0; i < inputList.length; i++) {
    if (!inputList[i].validity.valid)
      return false
  }
}

export function validation(validate, text) {
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

export function buttonValidation(inputList, button) {
  console.log(hasInvalid(inputList))
  if (hasInvalid(inputList) === undefined) {
    button.disabled = false;
    button.classList.remove("disabled");
    button.classList.add("overlay__button");
  } else {
    button.disabled = true;
    button.classList.add("disabled");
    button.classList.remove("overlay__button");
  }
}

export function validateIt(listOfInputs, button, listOfErrors) {
  for (let i = 0; i < listOfInputs.length; i++) {
    listOfInputs[i].addEventListener('input', () => {
      buttonValidation(listOfInputs, button);
      validation(listOfInputs[i], listOfErrors[i])
    })
  }
}