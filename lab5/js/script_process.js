const cubeClicker = document.querySelector(".cube");
const scoreText = document.getElementById("score-txt");
const timerTxt = document.getElementById("time-txt");
const buttonStart = document.querySelector(".btn-start");

const heroSection2 = document.querySelector(".hero-section"); 
const gameSection2 = document.querySelector(".game-section");

let mode;

let previousLeftValue = 0;

let score = 0;

let mode_n = 1;

let gameOver = false;

function RestartGame() {
    heroSection2.style.display = "block"; 
    gameSection2.style.display = "none"; 
}

function getMode() {
    mode = document.getElementById("mode-menu").value;
    return mode;
}

function CubePosition() {
    getMode();

    let topValue = RandomNumber(-230, 230);
    let leftValue;

    if(mode === "option2") {
        leftValue = RandomNumber(-405, 405);
    } else if(mode === "option3") {
        leftValue = RandomNumber(-495, 495);
    } else if(mode === "option4") {
        if (previousLeftValue > 0) {
            leftValue = RandomNumber(-650, -300);
        } else {
            leftValue = RandomNumber(300, 650);
        }
    }

    previousLeftValue = leftValue;

    cubeClicker.style.top = `${topValue}px`
    cubeClicker.style.left = `${leftValue}px`
}

function RandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function Score() {
    score++;
    scoreText.textContent = `${score}`;
}

function ShowAlert() {
    if(gameOver) { alert("Час вийшов! Гра завершена.\n" + `Ваші очки: ${score}`); }
    RestartGame();
}

let activeTimer = null;

function Timer(deadline) {
    if (activeTimer) {
        clearInterval(activeTimer);
    }
    
    let time = deadline;
    timerTxt.textContent = `${time}c`;
    
    activeTimer = setInterval(() => {
        time -= 1;
        timerTxt.textContent = `${time}c`;
        
        if (time <= 0) {
            clearInterval(activeTimer);
            activeTimer = null;
            gameOver = true;
            ShowAlert();
        }
    }, 1000);
}

function StartTimer() {
    if(mode_n === 2) {
        Timer(3);
    } else if(mode_n === 3) {
        Timer(2);
    }
}

buttonStart.addEventListener("click", (event) => {
    getMode();

    if(mode === "option2") {
        mode_n = 2;
    } else  if(mode === "option3") {
        mode_n = 3;
    } else  if(mode === "option4") {
        mode_n = 4;
    } 

    StartTimer();
})


cubeClicker.addEventListener("click", (event) => {
    if(!gameOver) {
        CubePosition();
        Score();
        StartTimer();
        
        if(mode_n === 4) {
            Timer(1);
        }
    }
})