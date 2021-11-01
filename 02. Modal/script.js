/*
    Learning:  Basics Of DOM and DOM Manipulation 

    Implementation Steps
    1. Open modal by removing hidden class.
    2. close modal by 3 ways:
        (i). By Close button.
        (ii). By clicking on Overlay.
        (iii). By clicking Escape Button.
*/

'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeModal = document.querySelector('.close-modal');
let openModal = document.querySelectorAll('.show-modal');

const hiddenModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const showModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", hiddenModal);
}

closeModal.addEventListener('click', showModal);
overlay.addEventListener('click', showModal);

document.addEventListener("keydown", function (e) {
    // console.log(e.key);
    if (!modal.classList.contains('.hidden') && e.key === 'Escape') {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})


