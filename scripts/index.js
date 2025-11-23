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


const captionInput = newPostForm.querySelector("#caption-input"); 
const cardImageInput = newPostForm.querySelector("#card-image-input"); 

function handleAddCardSubmit(evt) {
  evt.preventDefault(); 
 console.log(captionInput.value);
 console.log(cardImageInput.value);
  evt.target.reset();
}
newPostForm .addEventListener('submit', handleAddCardSubmit);
initialCards.forEach(function (item) {
    console.log(item.name);
    console.log(item.link);
});