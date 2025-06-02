const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;
let timer;

// Індикатори
for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateSlider();
    resetTimer();
  });
  dotsContainer.appendChild(dot);
}

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider();
  resetTimer();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlider();
  resetTimer();
});

function updateSlider() {
  const slideWidth = document.querySelector('.slider').clientWidth;
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

// Автоматичне перемикання
function startAutoSlide() {
  timer = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  }, 12000);
}

function resetTimer() {
  clearInterval(timer);
  startAutoSlide();
}

window.addEventListener('resize', updateSlider); // адаптація при зміні розміру вікна

startAutoSlide();
updateSlider();



document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navMenu = document.querySelector(".nav__menu");

    burger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // Закрити меню після кліку по пункту
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
    });
});
