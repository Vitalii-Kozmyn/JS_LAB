const burger = document.getElementById('burger');
const mobileNav = document.querySelector('.mobile-nav');

burger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});


const closeBtn = document.getElementById('closeMenu');

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
});