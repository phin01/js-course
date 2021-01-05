'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const tabs = document.querySelector('.operations__tab-container')
const tabbedContainer = document.querySelector('.operations')
const nav = document.querySelector('.nav')

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



// --------------------------------------------------------------------
// SELECTING HTML ELEMENTS
// --------------------------------------------------------------------

const allSections = document.getElementsByClassName('section') // RETURNS AN HTML ELEMENT LIST
const allButtons = document.getElementsByTagName('button') // RETURNS AN HTML ELEMENT LIST
const firstSection = document.querySelector('.section') // RETURNS A SINGLE ELEMENT (FIRST MATCH)
const allSectionsNode = document.querySelectorAll('.section') // RETURNS A NODE LIST

// --------------------------------------------------------------------
// INSERTING HTML
// .insertAdjacentHTML (MOST BASIC ONE, MUST TYPE ALL HTML CODE)
// --------------------------------------------------------------------

// INSERTING HTML ELEMENTS PROGRAMATICALLY
const cookieMessage = document.createElement('div');
cookieMessage.classList.add('cookie-message');
cookieMessage.innerHTML = 'We use cookies to track your personal info Mwahaha!';

const btnCloseCookie = document.createElement('button')
btnCloseCookie.classList.add('btn--close-cookie', 'btn')
btnCloseCookie.textContent = "OK, then!"
cookieMessage.append(btnCloseCookie)

const header = document.querySelector('.header');
console.log(header);
header.append(cookieMessage);
// header.prepend(cookieMessage);
// header.before(cookieMessage);
// header.after(cookieMessage);



// --------------------------------------------------------------------
// DELETING HTML ELEMENTS
// --------------------------------------------------------------------

btnCloseCookie.addEventListener('click', function(){
  cookieMessage.remove()
  // cookieMessage.parentElement.removeChild(cookieMessage)
})


// --------------------------------------------------------------------
// CHANGING STYLES
// --------------------------------------------------------------------

cookieMessage.style.backgroundColor = '#37383d'
cookieMessage.style.width = '100%'

// GETTING STYLES FROM THE PAGE
const cookieBarHeight = Number.parseFloat(getComputedStyle(cookieMessage).height, 10)
console.log(cookieBarHeight);
cookieMessage.style.height = cookieBarHeight + 30 + 'px'

// --------------------------------------------------------------------
// ATTRIBUTES (CAN BE READ OR SET)
// --------------------------------------------------------------------

const logo = document.querySelector('.nav__logo')
// STANDARD ATTRIBUTES
console.log(logo.src);
console.log(logo.alt);

// NON-STANDARD ATTRIBUTES
logo.setAttribute('Company', 'Bankist')
console.log(logo.getAttribute('Company'));




// --------------------------------------------------------------------
// IMPLEMENTING SMOOTH SCROLLING (OLD SCHOOL)
// --------------------------------------------------------------------

const btnLearnMore = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

// POSITION OF ELEMENTS
// THESE COORDINATES ARE RELATIVE TO THE SCROLLING POSITION IN THE PAGE
console.log(section1.getBoundingClientRect());

// THESE ARE THE SCROLLING COORDINATES
console.log(window.pageYOffset, window.pageXOffset);

// SO, IN ORDER TO SCROLL TO A SPECIFIC POSITION IN THE HTML PAGE, YOU MUST COMBINE THE ELEMENTS POSITION + CURRENT SCROLLING POSITION
const scrollToSection1 = function(e) {
  window.scrollTo({
    top: section1.getBoundingClientRect().top + window.pageYOffset,
    left: section1.getBoundingClientRect().left + window.pageXOffset,
    behavior: 'smooth'
  })
}

// btnLearnMore.addEventListener('click', scrollToSection1)

// --------------------------------------------------------------------
// IMPLEMENTING SMOOTH SCROLLING (FOR MODERN BROWSERS)
// --------------------------------------------------------------------

btnLearnMore.addEventListener('click', () => section1.scrollIntoView({behavior: 'smooth'}))



// --------------------------------------------------------------------
// ADD AND REMOVE EVENT LISTENERS
// --------------------------------------------------------------------

const uselessFunction = function() {
  console.log('a');
}

btnLearnMore.addEventListener('click', uselessFunction)
btnLearnMore.removeEventListener('click', uselessFunction)


// --------------------------------------------------------------------
// NAVIGATION LINKS
// --------------------------------------------------------------------

// WITHOUT EVENT DELEGATION
// CREATE A SINGLE EVENT LISTENER FOR EACH LINK. COULD AFFECT PERFORMANCE IN CASE OF A LARGE NUMBER OF ELEMENTS

// const navLinks = document.querySelectorAll('.nav__link')
// navLinks.forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     const targetSection = link.getAttribute('href')
//     document.querySelector(targetSection).scrollIntoView({behavior: 'smooth'})
//   })
// })


// WITH EVENT DELEGATION
// 1. ATTACH EVENT LISTENER TO COMMON PARENT ELEMENT
// 2. DETERMINE ELEMENT WHICH TRIGGERED THE EVENT
// 3. CALL FUNCTIONS

const navLinkBar = document.querySelector('.nav__links')
navLinkBar.addEventListener('click', function(e){
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const targetSection = e.target.getAttribute('href')
    document.querySelector(targetSection).scrollIntoView({behavior: 'smooth'})
  }
})


// --------------------------------------------------------------------
// INTRODUCING A TABBED COMPONENT
// --------------------------------------------------------------------



tabs.addEventListener('click', function(e) {
  e.preventDefault();
  const clickedTab = e.target.closest('.operations__tab') // BECAUSE THE BUTTON HAS SPAN ATTRIBUTES THAT MIGHT GET CLICKED INSTEAD

  if (!clickedTab) return; // ESCAPE THE FUNCTION IN CASE THE CLICKED ELEMENT IS NOT A VALID TAB

  // TOGGLE ACTIVE BUTTONS
  tabs.querySelectorAll('.operations__tab').forEach(tab => tab.classList.remove('operations__tab--active')) // MORE GUARANTEED
  // clickedTab.parentElement.querySelector('.operations__tab--active').classList.remove('operations__tab--active')
  clickedTab.classList.add('operations__tab--active')
  const selectedTab = clickedTab.getAttribute('data-tab')

  // DISPLAY TEXT
  tabbedContainer.querySelectorAll('.operations__content--active').forEach(cont => cont.classList.remove('operations__content--active'))
  tabbedContainer.querySelector(`.operations__content--${selectedTab}`).classList.add('operations__content--active')

})


// --------------------------------------------------------------------
// MENU FADE NAVIGATION
// --------------------------------------------------------------------

nav.addEventListener('mouseover', function(e){
  if(e.target.classList.contains('nav__link')) {
    nav.querySelectorAll('.nav__link').forEach(function(link) {
      if(link !== e.target) link.style.opacity = 0.5
    })
  }
})

nav.addEventListener('mouseout', function(e){
  nav.querySelectorAll('.nav__link').forEach(link => link.style.opacity = 1)
})

