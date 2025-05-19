const gameWapper = document.querySelector('.game__wrapper');
const gameContainer = document.querySelector('.game__container');
const basket = document.querySelector('.game__basket');
const popcornDiv = document.querySelector('.popcorns');
const btnRestart = document.getElementById("game-restart");
const btnGoHome = document.getElementById("game-go-home");
const btnStart = document.getElementById("game-start");
const scoreTXT = document.getElementById("popcorn-score");

let basketBottom = 0;
let basketLeft = 0;
let score = 0;

btnStart.addEventListener("click", () => {
    StartGame();
});

btnGoHome.addEventListener('click', () => {
    window.location.href = 'index.html';
});

btnRestart.addEventListener('click', () => {
    location.reload();
});

function ChangeScore() {
    score++;
    scoreTXT.textContent = score;
}

function movieBasketLeft() {
    basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue('left'));
    if (basketLeft > 0) {
        basketLeft -= 20;
        basket.style.left = basketLeft + 'px';
    }
}

function movieBasketRight() {
    basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue('left'));
    if (basketLeft < 800) {
        basketLeft += 17;
        basket.style.left = basketLeft + 'px';
    }
}

function control(e) {
    if (e.key === 'ArrowLeft') {
        movieBasketLeft();
    } else if (e.key === 'ArrowRight') {
        movieBasketRight();
    }
}

document.addEventListener('keydown', control);

function generatePopcorn() {
    let popcornBottom = 470;
    let popcornLeft = Math.floor(Math.random() * 800);
    
    let rotation = Math.floor(Math.random() * 360);
    let rotationSpeed = Math.random() * 5 + 1;
    let rotationDirection = Math.random() < 0.5 ? -1 : 1;
    let currentRotation = rotation;

    let popcorn = document.createElement('div');
    popcorn.setAttribute('class', 'popcorn');
    popcorn.style.bottom = popcornBottom + 'px';
    popcorn.style.left = popcornLeft + 'px';
    popcorn.style.transform = `rotate(${currentRotation}deg)`;

    popcornDiv.appendChild(popcorn);

    function fallDownPopcorn() {
        let basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue('left'));
        let basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue('bottom'));

        if (
            popcornBottom < basketBottom + 50 &&
            popcornBottom > basketBottom &&
            popcornLeft > basketLeft - 30 &&
            popcornLeft < basketLeft + 80
        ) {
            popcorn.remove();
            clearInterval(fallInterval);
            ChangeScore();
            return;
        }

        if (popcornBottom < basketBottom) {
            popcorn.remove();
            alert("Вас було виведено з залу через свинство 🐷");
            clearInterval(fallInterval);
            clearTimeout(popcornTimeout);
            GameOver();
            return;
        }

        popcornBottom -= 6.5;

        // Обертання поки не досяг дна
        if (popcornBottom >= basketBottom) {
            currentRotation += rotationSpeed * rotationDirection;
            popcorn.style.transform = `rotate(${currentRotation}deg)`;
        }

        popcorn.style.bottom = popcornBottom + 'px';
    }

    let fallInterval = setInterval(fallDownPopcorn, 20);
    let popcornTimeout = setTimeout(generatePopcorn, 2000);
}



function StartGame() {
    gameWapper.classList.remove("hidden");
    btnStart.style.display = "none";
    btnRestart.style.display = "block";

    basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue('left'));
    basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue('bottom'));

    generatePopcorn();
}

function GameOver() {
    gameWapper.classList.add("hidden");
    btnStart.style.display = "block";
    btnRestart.style.display = "none";

    score = 0;
    scoreTXT.textContent = score;
}

const video = document.querySelector(".game__bg-video");
const source = video.querySelector("source");

const sourceDsmom = "video/drstrange2.mp4"
const sourceThunderbolts = "video/bg-video-thunderbolts.mp4"
const sourceMiss = "video/bg-video-miss.mp4"
const sourceDest = "video/bg-video-dest.mp4"

let second = 0;

function timerChangeBG() {
    second++;
    if (second === 1) {
        source.src = sourceDsmom;
        video.load();
    } else if (second === 30) {
        source.src = sourceDest;
        video.load();
    } else if (second === 60) {
        source.src = sourceThunderbolts;
        video.load();
    } else if (second === 90) {
        source.src = sourceMiss;
        video.load();
    } else if (second === 120) {
        second = 0;
    }
}

setInterval(timerChangeBG, 1000);
