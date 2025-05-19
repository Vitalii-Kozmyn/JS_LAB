async function getData() {
    try {
        const response = await fetch('./data/new_film.json');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const firstMovie = {
            index: 1,
            title: data.movies[0].title,
            imdb: data.movies[0].imdb_rating,
            duration: data.movies[0].duration,
            genre: data.movies[0].genre,
            description: data.movies[0].description,
            trailer: data.movies[0].trailer,
        };

        const secondMovie = {
            index: 2,
            title: data.movies[1].title,
            imdb: data.movies[1].imdb_rating,
            duration: data.movies[1].duration,
            genre: data.movies[1].genre,
            description: data.movies[1].description,
            trailer: data.movies[1].trailer,
        };

        const thirdMovie = {
            index: 3,
            title: data.movies[2].title,
            imdb: data.movies[2].imdb_rating,
            duration: data.movies[2].duration,
            genre: data.movies[2].genre,
            description: data.movies[2].description,
            trailer: data.movies[2].trailer,
        };

        return { firstMovie: firstMovie, secondMovie, thirdMovie };
        console.log(title);
    } catch (error) {
        console.error('Помилка при завантаженні даних:', error);
    }
}

function HiddenDiv(selector) {
    const div = document.querySelector(selector);
    if (div) {
        div.classList.add('hidden');
    }
}

function ShowDiv(selector) {
    const div = document.querySelector(selector);
    if (div) {
        div.classList.remove('hidden');
    }
}

async function main() {
    const filmData = await getData();
    const fMovie = filmData.firstMovie;
    const sMovie = filmData.secondMovie;
    const tMovie = filmData.thirdMovie;

    function createDiv() {
        const divHeroMovie = document.querySelector('.hero__movie');

        divHeroMovie.innerHTML = `
        <div class="hero__movie--first show'">
            <video class="bg-video" autoplay loop muted plays-inline>
                <source src='${fMovie.trailer}' type="video/mp4">
            </video>
            <div class="movie__container">
                <h2 class="movie__title">${fMovie.title}</h2>
                <div class = "movie__info">
                    <p class="movie__info-ganre">${fMovie.genre}</p>
                    <p class="movie__info-decor">|</p>
                    <div class="movie__info-imdb">
                        <div class="imdb-icon">IMDb</div>
                        <p class="imdb">${fMovie.imdb}</p>
                    </div>
                    <p class="movie__info-decor">|</p>
                    <p class="movie__info-uration">${fMovie.duration}</p>
                </div>
                <p class="movie__description">${fMovie.description}</p>
            </div>
        </div>

        <div class="hero__movie--second hidden">
            <video class="bg-video" autoplay loop muted plays-inline>
                <source src='${sMovie.trailer}' type="video/mp4">
            </video>
            <div class="movie__container">
                <h2 class="movie__title">${sMovie.title}</h2>
                <div class = "movie__info">
                    <p class="movie__info-ganre">${sMovie.genre}</p>
                    <p class="movie__info-decor">|</p>
                    <div class="movie__info-imdb">
                        <div class="imdb-icon">IMDb</div>
                        <p class="imdb">${sMovie.imdb}</p>
                    </div>
                    <p class="movie__info-decor">|</p>
                    <p class="movie__info-uration">${sMovie.duration}</p>
                </div>
                <p class="movie__description">${sMovie.description}</p>
            </div>
        </div>

        <div class="hero__movie--third hidden">
            <video class="bg-video" autoplay loop muted plays-inline>
                <source src='${tMovie.trailer}' type="video/mp4">
            </video>
            <div class="movie__container">
                <h2 class="movie__title">${tMovie.title}</h2>
                <div class = "movie__info">
                    <p class="movie__info-ganre">${tMovie.genre}</p>
                    <p class="movie__info-decor">|</p>
                    <div class="movie__info-imdb">
                        <div class="imdb-icon">IMDb</div>
                        <p class="imdb">${tMovie.imdb}</p>
                    </div>
                    <p class="movie__info-decor">|</p>
                    <p class="movie__info-uration">${tMovie.duration}</p>
                </div>
                <p class="movie__description">${tMovie.description}</p>
            </div>
        </div>
        `;
    }

    createDiv();
}

main();

let seconds = 0;

function timerTick() {
    seconds++;
    if(seconds === 1) {
        ShowDiv(".hero__movie--first")
        HiddenDiv(".hero__movie--third")
    }
    if (seconds === 20) {
        ShowDiv(".hero__movie--second")
        HiddenDiv(".hero__movie--first")
    } else if (seconds === 40) {
        ShowDiv(".hero__movie--third")
        HiddenDiv(".hero__movie--second")
    } else if (seconds === 60) {
        seconds = 0; 
    }
}

setInterval(timerTick, 1000);
