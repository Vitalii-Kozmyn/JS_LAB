const burger = document.getElementById('burger');
const mobileNav = document.querySelector('.mobile-nav');
const btnMobileHome = document.querySelector(".mobile-nav__home");
const btnMobileCatalog = document.querySelector(".mobile-nav__catalog");

burger.addEventListener('click', () => {
    mobileNav.classList.add('open');
});


const closeBtn = document.getElementById('closeMenu');

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
});

btnMobileCatalog.addEventListener("click", ()=> {
    mobileNav.classList.remove('open');
})

btnMobileHome.addEventListener("click", ()=> {
    mobileNav.classList.remove('open');
})