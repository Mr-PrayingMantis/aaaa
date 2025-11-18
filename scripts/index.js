//console.log("EXTERMINATE")
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");

//const addCardFormElement = 

const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");


editProfileBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    editProfileModal.classList.add("modal_is-open");
});

editProfileCloseBtn.addEventListener("click", function () {
    editProfileModal.classList.remove("modal_is-open");
});

newPostBtn.addEventListener("click", function () {
    newPostModal.classList.add("modal_is-open");
});

newPostCloseBtn.addEventListener("click", function () {
    newPostModal.classList.remove("modal_is-open");
});

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value;
    editProfileModal.classList.remove("modal_is-open");
};

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

const addCardFormElement = newPostModal.querySelector(".modal__form");
const captionInput = newPostForm.querySelector("#caption-input"); 
const cardImageInput = newPostForm.querySelector("#card-image-input"); 
//stop herre console.log(captionInput.value);

function handleAddCardSubmit(evt) {
  evt.preventDefault(); 
 console.log(captionInput.value);
 console.log(cardImageInput.value);
  newPostModal.classList.remove("modal_is-open");
}
addCardFormElement.addEventListener('submit', handleAddCardSubmit);