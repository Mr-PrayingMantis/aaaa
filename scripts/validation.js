const showInputError = (formEl, inputEl, errorMsg) => {
    const errorMsgID = inputEl.id + "-error";
    const errorMsgEl = document.querySelector("#" + errorMsgID);
    errorMsgEl.textContent = errorMsg;
    
};

const checkInputValidity = (formEl, inputEl) => {
    if (!inputEl.validity.vald) {
        showInputError(formEl, inputEl, inputEl.validationMessage);
    } /*else {
        //hideInputError
    }*/
}

const setEventListerners =(formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
  const buttonElement = formEl.querySelector(".modal__submit-btn");

  
  //toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formEl, inputElement);
      //toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
    const formList = document.querySelectorAll(".modal__form");
    formList.forEach((formEl) => {
    setEventListerners (formEl);
    });
};

enableValidation();