const cubeGridContainer = document.getElementById("cubeMap");
const cube = document.querySelector(".cube");
const btnStart = document.getElementById("start-btn");
const btnRestart = document.getElementById("restart-btn");
const minCountSteps = document.getElementById("min-count");
const countStepsTXT = document.getElementById("count-steps");
const timerTxt = document.querySelector(".info__timer");

const infoPanel = document.querySelector(".info-container");
const buttonsMenu = document.querySelector(".menu__buttons");

const root = document.documentElement;

async function getDataA() {
    const response = await fetch("./data/map_a.json");
    const data_a = await response.json();

    const map_a = data_a.map
    const min_steps = data_a.min_steps;

    return { map: map_a, min_steps };
}

async function getDataB() {
    const response = await fetch("./data/map_b.json");
    const data_b = await response.json();

    const map_b = data_b.map
    const min_steps = data_b.min_steps;

    return { map: map_b, min_steps };
}

async function getDataC() {
    const response = await fetch("./data/map_c.json");
    const data_c = await response.json();

    const map_c = data_c.map
    const min_steps = data_c.min_steps;

    return { map: map_c, min_steps };
}

function setDarkGrayTheme() {
    root.style.setProperty('--glow-color', 'rgb(50, 50, 50)');
    root.style.setProperty('--glow-spread-color', 'rgba(40, 40, 40, 0.8)');
    root.style.setProperty('--enhanced-glow-color', 'rgb(70, 70, 70)');
    root.style.setProperty('--btn-color', 'rgb(60, 60, 60)');
    infoPanel.style.backgroundColor ="rgba(60, 60, 60, 0.2)";
    buttonsMenu.style.backgroundColor ="rgba(60, 60, 60, 0.2)";
}

function setSunTheme() {
    root.style.setProperty('--glow-color', 'rgb(190, 170, 80');
    root.style.setProperty('--glow-spread-color', 'rgba(160, 140, 60, 0.8)');
    root.style.setProperty('--enhanced-glow-color', 'rgb(210, 190, 100)');
    root.style.setProperty('--btn-color', 'rgb(140, 120, 40)');
    infoPanel.style.backgroundColor ="rgba(140, 120, 40, 0.2)";
    buttonsMenu.style.backgroundColor ="rgba(140, 120, 40, 0.2)";
}

function AddSteps(step) {
    countStepsTXT.textContent = step;
}

function ChangeLight(div) {
    if(div.classList.contains("light")) {
        div.classList.remove("light");
    } else {
        div.classList.add('light');
    }
}

let cubeDivs = [];
let steps = 0;

function renderGrid(map) {
    cubeGridContainer.innerHTML = '';
    for (let i = 0; i < map.length; i++) {
        cubeDivs[i] = [];
        for (let j = 0; j < map[i].length; j++) {
            const newCubeDiv = document.createElement('div');
            newCubeDiv.classList.add('cube');
            if(map[i][j] == 1) {
                newCubeDiv.classList.add('light');
            }

            cubeDivs[i][j] = newCubeDiv;

            newCubeDiv.dataset.i = i;
            newCubeDiv.dataset.j = j;

            cubeGridContainer.appendChild(newCubeDiv);

            newCubeDiv.addEventListener("click", ()=> {
                const x = parseInt(newCubeDiv.dataset.i);
                const y = parseInt(newCubeDiv.dataset.j);

                ChangeLight(cubeDivs[i][j]);

                if (cubeDivs[x - 1] && cubeDivs[x - 1][y]) {
                    ChangeLight(cubeDivs[x - 1][y]); //Верхній сусід
                }
                if (cubeDivs[x + 1] && cubeDivs[x + 1][y]) {
                    ChangeLight(cubeDivs[x + 1][y]); //Нижній сусід
                }
                if (cubeDivs[x][y - 1]) {
                    ChangeLight(cubeDivs[x][y - 1]); //Лівий сусід
                }
                if (cubeDivs[x][y + 1]) {
                    ChangeLight(cubeDivs[x][y + 1]); //Правий сусід
                }

                steps++;
                AddSteps(steps);
                CheckWin();
            })
        }
    }
}

function RoundOver() {
    cubeGridContainer.innerHTML = '';
    minCountSteps.textContent = '0';
    countStepsTXT.textContent = '0';
    timerTxt.textContent = '00:00'
}

function ShowAlert() {
    alert("Час вийшов!");
    RoundOver();
}

let activeTimer = null;

function Timer(deadline) {
    if (activeTimer) {
        clearInterval(activeTimer);
    }

    let time = deadline;

    activeTimer = setInterval(() => {
        if (time < 0) {
            clearInterval(activeTimer);
            activeTimer = null;
            ShowAlert();
            return;
        }

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timerTxt.textContent = 
            (minutes < 10 ? '0' : '') + minutes + ':' + 
            (seconds < 10 ? '0' : '') + seconds;

        time -= 1;
    }, 1000);
}


let random = null;

function RandomNumber() {
    random = Math.floor(Math.random() * 3) + 1;
}

async function RoundLoad() {
    const mapA = await getDataA();
    const mapB = await getDataB();
    const mapC = await getDataC();

    setSunTheme();

    countStepsTXT.innerHTML = '0';
    steps = 0;

    Timer(600);

    console.log(random);

    if(random === 1) {
        renderGrid(mapA.map);
        console.log(mapA);
        console.log(mapA.min_steps);
        minCountSteps.textContent = mapA.min_steps;    
    } else if(random === 2) {
        renderGrid(mapB.map);
        console.log(mapB);
        console.log(mapB.min_steps);  
        minCountSteps.textContent = mapB.min_steps;   
    } else if(random === 3) {
        renderGrid(mapC.map);
        console.log(mapC);
        console.log(mapC.min_steps); 
        minCountSteps.textContent = mapC.min_steps;    
    }
}

btnStart.addEventListener("click", ()=> {
    RandomNumber();
    RoundLoad();
})

btnRestart.addEventListener("click", ()=> {
    RoundLoad();
})

function CheckWin() {
    let countCorrect = 0;
    let totalCubes = 0;

    for (let i = 0; i < cubeDivs.length; i++) {
        for (let j = 0; j < cubeDivs[i].length; j++) {
            totalCubes++;
            if (!cubeDivs[i][j].classList.contains("light")) {
                countCorrect++;
            }
        }
    }

    if (countCorrect === totalCubes) {
        alert("Ви виграли!");
        clearInterval(activeTimer);
        RoundOver();
        setDarkGrayTheme();
    }
}