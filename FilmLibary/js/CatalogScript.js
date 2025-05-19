const genreMap = {
    Екшн: 'action',
    Комедія: 'comedy',
    Фентезі: 'fantasy',
    Жахи: 'horror',
    Романтика: 'romance',
};

const buttons = document.querySelectorAll('.filter-btn');
const catalogFilms = document.querySelector('.catalog__films');
let movieContainer = document.querySelector('.movie__page');

const heroSection = document.querySelector(".hero-section");
const advantagesSection = document.querySelector(".advantages-section");
const catalogSection = document.querySelector(".catalog-section");
const movieSection = document.querySelector(".movie-section");

const btn_goToHome = document.querySelectorAll(".go-to-home");

btn_goToHome.forEach(button => {
    button.addEventListener("click", () => {
        showMainSection();
        hiddenMoviePage();
    });
});

let targetID;
let moviesData = [];

function setTargetID(id) {
    targetID = id;
}

function getTargetID() {
    return targetID;
}

function getMovies() {
    return moviesData;
}

function hiddenMainSection() {
    heroSection.style.display = "none";
    advantagesSection.style.display = "none";
    catalogSection.style.display = "none";
}

function showMainSection() {
    heroSection.style.display = "block";
    advantagesSection.style.display = "block";
    catalogSection.style.display = "block";
}

function showMoviePage() {
    movieSection.style.display = "block";
}

function hiddenMoviePage() {
    movieSection.style.display = "none";
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        FilterMovies(button);
    });
});

async function getMovies() {
    const response = await fetch('./data/movies.json');
    let content = await response.json();
    moviesData = content;

    let key;

    for (key in content) {
        const genreEn = genreMap[content[key].genre];

        catalogFilms.innerHTML += `
            <div class="movie-card ${genreEn}" data-index="${content[key].index}">
                    <div class="card__poster">
                        <img src="${content[key].posterPath}" alt="Постер" />
                    </div>
                    <div class="bg--card__details" id="${content[key].index}">
                        <div class="card__details">
                            <img
                                src="${content[key].logoPath}"
                                    alt="Лoго"
                                    class="card__details-logo"
                            />
                            <h3 class="card__details-company">${content[key].studio}</h3>
                            <div class="movie__info-imdb card__details-imdb">
                                <div class="imdb-icon imdb">IMDb</div>
                                <p class="imdb">${content[key].imdbRating}</p>
                            </div>
                            <p class="movie__info-ganre card__details-ganre">${content[key].genre}</p>
                            <div class="card__details-description">
                                <p>${content[key].description}</p>
                            </div>
                        </div>
                    </div>
            </div>
        `;

        let indexBG = document.getElementById(`${content[key].index}`);
        indexBG.style.background = `linear-gradient(0deg, ${content[key].thematicColor} 50%, transparent)`;
    }

    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            setTargetID(card.dataset.index);
            OpenMoviePage();
        });
    });
}

getMovies();

function FilterMovies(button) {
    const actionFilms = document.querySelectorAll('.action');
    const comedyFilms = document.querySelectorAll('.comedy');
    const fantasyFilms = document.querySelectorAll('.fantasy');
    const horrorFilms = document.querySelectorAll('.horror');
    const romanceFilms = document.querySelectorAll('.romance');

    const setDisplay = (elements, displayValue) => {
        elements.forEach(element => {
            element.style.display = displayValue;
        });
    };

    if (button.id === 'btn-all') {
        setDisplay(actionFilms, 'block');
        setDisplay(comedyFilms, 'block');
        setDisplay(fantasyFilms, 'block');
        setDisplay(horrorFilms, 'block');
        setDisplay(romanceFilms, 'block');
    } else if (button.id === 'btn-action') {
        setDisplay(actionFilms, 'block');
        setDisplay(comedyFilms, 'none');
        setDisplay(fantasyFilms, 'none');
        setDisplay(horrorFilms, 'none');
        setDisplay(romanceFilms, 'none');
    } else if (button.id === 'btn-comedy') {
        setDisplay(actionFilms, 'none');
        setDisplay(comedyFilms, 'block');
        setDisplay(fantasyFilms, 'none');
        setDisplay(horrorFilms, 'none');
        setDisplay(romanceFilms, 'none');
    } else if (button.id === 'btn-fantasy') {
        setDisplay(actionFilms, 'none');
        setDisplay(comedyFilms, 'none');
        setDisplay(fantasyFilms, 'block');
        setDisplay(horrorFilms, 'none');
        setDisplay(romanceFilms, 'none');
    } else if (button.id === 'btn-horror') {
        setDisplay(actionFilms, 'none');
        setDisplay(comedyFilms, 'none');
        setDisplay(fantasyFilms, 'none');
        setDisplay(horrorFilms, 'block');
        setDisplay(romanceFilms, 'none');
    } else if (button.id === 'btn-romance') {
        setDisplay(actionFilms, 'none');
        setDisplay(comedyFilms, 'none');
        setDisplay(fantasyFilms, 'none');
        setDisplay(horrorFilms, 'none');
        setDisplay(romanceFilms, 'block');
    }
}


async function createMoviePage() {
    movieContainer.innerHTML = '';
    const data = moviesData;
    targetID = getTargetID();

    for (let movie of data) {
        if (movie.index == targetID) {
            movieContainer.innerHTML += `
                <div class="movie__info--one">
                    <img src="${movie.posterPath}" class="movie__poster">
                    <div class = "movie__tegs">
                        <p class="movie__info-ganre tegs__ganre" id="info-ganre--page">${movie.genre}</p>
                        <p class="movie__info-decor">|</p>
                        <div class="movie__info-imdb tegs__imdb" id="info-imdb--page">
                            <div class="imdb-icon tegs__imdb-icon" id="info-imdb-icon--page">IMDb</div>
                            <p class="imdb" id="info-imdb-txt--page">${movie.imdbRating}</p>
                        </div>
                        <p class="movie__info-decor">|</p>
                        <p class="movie__info-duration" id="info-duration--page">${movie.duration}</p>
                    </div>
                </div>
                <div class="movie__info--two">
                    <div class="movie__characteristic">
                        <h2 class="movie__title--page">${movie.name}</h2>
                        <p class="movie__studio">${movie.studio}</p>
                        <p class="movie__actors">Aктори: <span>${movie.actors}</span></p>
                        <p class="movie__description">${movie.description}</p>
                    </div>
                    <div class="movie__trailer">
                        <iframe width="560" height="315" 
                            src="${movie.trailerLink}" 
                            title="YouTube video player"
                            frameborder="0" allow="accelerometer;
                            autoplay;
                            clipboard-write;
                            encrypted-media; 
                            gyroscope;
                            picture-in-picture;
                            web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            `;
            break;
        }
    }
}

function OpenMoviePage() {
    hiddenMainSection();
    showMoviePage();
    createMoviePage();
}