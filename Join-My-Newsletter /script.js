'use strict';

const popUp = document.querySelector('.pop-up');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-pop-up');
const btnOpen = document.querySelector('.show-pop-up');

const openPopUp = function () {
  popUp.classList.remove('hidden')
  overlay.classList.remove('hidden')
};

const closePopUp = function () {
  popUp.classList.add("hidden")
  overlay.classList.add("hidden")
};


// for (let i = 0; i < btnOpen.length; i++)
btnOpen.addEventListener("click", openPopUp)

btnClose.addEventListener('click', closePopUp);
overlay.addEventListener('click', closePopUp);