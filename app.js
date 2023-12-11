const hamburgerButton = document.querySelector('.hamburger-button');
console.log(hamburgerButton);
const mobileNav = document.querySelector('.mobile-nav');


function hamburger () {
    mobileNav.classList.toggle('active');
}

hamburgerButton.addEventListener('click', hamburger);