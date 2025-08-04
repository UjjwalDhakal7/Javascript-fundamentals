'use strict';

// Select the class from CSS
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// declare function to open pop-up modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// declare function to close pop-up modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Define eventhandlers to call the modal functions as needed
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);

  overlay.addEventListener('click', closeModal);
}

// Responding to key press events (Global events)
document.addEventListener('keydown', function (e) {
  // keydown means a key is pressed then a object is created, contains the details of the keyEvent.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
