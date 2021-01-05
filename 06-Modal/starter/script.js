'use strict';

// ELEMENTS TO BE MANIPULATED
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');


// FUNCTIONS TO HANDLE SHOW/HIDE
const showModal = function(){
    console.log('Show Modal, beeatch');
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const hideModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}



// BIND TO BUTTONS
for(const btn of btnOpenModal) btn.addEventListener('click', showModal)
btnCloseModal.addEventListener('click', hideModal)
overlay.addEventListener('click', hideModal)

// HANDLING THE 'ESC' KEY
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) hideModal()
})
