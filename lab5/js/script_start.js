const heroSection = document.querySelector(".hero-section"); 
const gameSection = document.querySelector(".game-section");

const btnStart = document.querySelector(".btn-start"); 

const gamePole = document.querySelector(".game-pole");
const cube = document.querySelector(".cube");

let modeOptions;
let colorOptions

function ChangeSection() { 
    heroSection.style.display = "none"; 
    gameSection.style.display = "block"; 
}

function InfoMode() {
    modeOptions = document.getElementById("mode-menu").value; 

    if(modeOptions === "option3") {
        gamePole.style.width = "1000px";
        cube.style.width = "34px"
        cube.style.height = "34px"
    } else if (modeOptions === "option4") {
        gamePole.style.width = "1300px";
        cube.style.width = "24px"
        cube.style.height = "24px"
    }
}

function InfoColor() {
    colorOptions = document.getElementById("customization-menu").value;

    if(colorOptions === "option2") {
        cube.style.backgroundColor = "var(--bagryanyi)";
    } else if(colorOptions === "option3") {
        cube.style.backgroundColor = "var(--smaragdovyi)";
    } else if(colorOptions === "option4") {
        cube.style.backgroundColor = "var(--burshtynovyi)";
    }
}

function StartGame() { 
    modeOptions = document.getElementById("mode-menu").value; 
    colorOptions = document.getElementById("customization-menu").value;

    if(modeOptions === "option1" || colorOptions === "option1") { 
    console.log("Помилка!!!"); 
    } else { 
        ChangeSection();
        InfoMode();
        InfoColor();
    } 
}

btnStart.addEventListener("click", (event) => { 
    StartGame(); 
});