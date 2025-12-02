//index.js
const initialCards = [
    {
        name: "Val Thorens",
        link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    },
    {
        name:"Restaurant terrace",
        link:"./images/spots-images/2-photo-by-ceiline-from-pexels.jpg"
    },
    {
        name:"An outdoor cafe",
        link:"./images/spots-images/3-photo-by-tubanur-dogan-from-pexels.jpg",
    },
    {
        name:"A very long bridge, over the forest communist",
        link:"./images/spots-images/4-photo-by-maurice-laschet-from-pexels.jpg",
    },

    {
        name:"Tunnel with morning light",
        link:"./images/spots-images/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    },

    {
        name:"Mountain house",
        link:"./images/spots-images/6-photo-by-moritz-feldmann-from-pexels.jpg",
    },
    ];

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");


const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const cardsList = document.querySelector(".cards__list")

function getCardElemant(data) {
    const cardElemant = cardTemplate.cloneNode(true);
    const cardTitleEl = cardElemant.querySelector(".card__title");
    const cardImageEl = cardElemant.querySelector(".card__image");

    cardImageEl.src = data.link;
    cardImageEl.alt = data.name;
    cardTitleEl.textContent = data.name;

    return cardElemant;
}

function openModal(modal) {
  modal.classList.add("modal_is-open");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-open");
}

editProfileBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    openModal(editProfileModal);
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

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value;
    closeModal(editProfileModal);
};

editProfileForm.addEventListener("submit", handleEditProfileSubmit);


const captionInput = newPostForm.querySelector("#caption-input"); 
const cardImageInput = newPostForm.querySelector("#card-image-input"); 

function handleAddCardSubmit(evt) {
  evt.preventDefault(); 
 const cardElemant = getCardElemant({
    name: captionInput.value,
    link: cardImageInput.value,
 });
    cardsList.prepend(cardElemant);
  evt.target.reset();
  closeModal(newPostModal);
}
newPostForm .addEventListener('submit', handleAddCardSubmit);
initialCards.forEach(function (item) {
    const cardElemant = getCardElemant(item);
    cardsList.append(cardElemant);
}); 