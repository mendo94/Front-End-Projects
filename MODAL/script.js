"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
//when we use a query selector with multiple elements, you have to add query selector again or else only the first one gets selected
const btnsClosemODAL = document.querySelector(".show-modal");
const btnsOpenmODAL = document.querySelectorAll(".show-modal"); //now we get a node list, behaving like an array

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (
  let i = 0;
  i < btnsOpenmODAL.length;
  i++ //doesnt need the curly braces because there is only one if statement
)
  btnsOpenmODAL[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  //close the box when the esc key is pressed
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
