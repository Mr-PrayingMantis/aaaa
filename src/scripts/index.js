import "../pages/index.css";

import {
  enableValidation,
  config,
  resetValidation,
  disableButton,
} from "./validation.js";
import Api from "../utils/Api.js"


const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "57050730-15bb-4539-9434-9c656456e2a7",
    "Content-Type": "application/json",
  },
}); 

api.getAppInfo().then(([cards, userInfo]) => {
    profileNameEl.textContent = userInfo.name;
    profileDescriptionEl.textContent = userInfo.about;
    avatarInput.src = userInfo.avatar;
  cards.forEach((item) => {
    const cardElemant = getCardElement(item);
    cardsList.append(cardElemant);
  });
})
.catch((err) => {
    console.error(err);
  })

const avatarModal = document.querySelector("#avatar-modal");
const avatarForm = avatarModal.querySelector(".modal__form");
const avatarFormSubmit = avatarModal.querySelector(".modal__submit-btn");
const avatarCloseBtn = avatarModal.querySelector(".modal__close-btn");
const avatarInput = avatarModal.querySelector("#profile-avatar-input",);
const avatarModalBtn = document.querySelector(".profile__avatar-btn");

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostFormSubmit = newPostModal.querySelector(".modal__submit-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");

function getCardElement(data) {
  const cardElemant = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElemant.querySelector(".card__title");
  const cardImageEl = cardElemant.querySelector(".card__image");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  const cardLikeButton = cardElemant.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  const cardDeleteButton = cardElemant.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => {
    cardElemant.remove();
  });
  cardImageEl.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaption.textContent = data.name;
    openModal(previewModal);
  });

  return cardElemant;
}

previewModalCloseBtn.addEventListener("click", function () {
  closeModal(previewModal);
});

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_is-open");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

function handleOverlayClick(evt) {
  if (evt.target.classList.contains("modal")) {
    closeModal(evt.target);
  }
}

function openModal(modal) {
  modal.classList.add("modal_is-open");
  document.addEventListener("keydown", handleEscapeKey);
  modal.addEventListener("mousedown", handleOverlayClick);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-open");
  document.removeEventListener("keydown", handleEscapeKey);
  modal.removeEventListener("mousedown", handleOverlayClick);
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
  const editProfileInputs = Array.from(
    editProfileForm.querySelectorAll(".modal__input"),
  );
  resetValidation(editProfileForm, editProfileInputs);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

avatarModalBtn.addEventListener("click", function () {
  openModal(avatarModal);
});

avatarCloseBtn.addEventListener("click", function () {
  closeModal(avatarModal);
});

avatarForm.addEventListener("submit", handleAvatarSubmit);

function handleAvatarSubmit(evt) {
  evt.preventDefault();
  api
    .editUserAvatar({ avatar: avatarInput.value })
    .then((data) => {
      avatarModalBtn.style.backgroundImage = `url(${data.avatar})`;
      closeModal(avatarModal);
      avatarForm.reset();
    })
    .catch(console.error);
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  api.editUserInfo({name: editProfileNameInput.value, about: editProfileDescriptionInput.value})
  .then((data) => {})
  .catch(console.error);

  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
  const editProfileSubmitBtn =
    editProfileForm.querySelector(".modal__submit-btn");
  disableButton(editProfileSubmitBtn, config);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

const captionInput = newPostForm.querySelector("#caption-input");
const cardImageInput = newPostForm.querySelector("#card-image-input");

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const cardElemant = getCardElement({
    name: captionInput.value,
    link: cardImageInput.value,
  });
  cardsList.prepend(cardElemant);
  evt.target.reset();
  disableButton(newPostFormSubmit, config);
  closeModal(newPostModal);
}
newPostForm.addEventListener("submit", handleAddCardSubmit);


enableValidation(config);
