const heroSection = document.querySelector('.hero-section');
const categorySection = document.querySelector('.category-section');
const productSection = document.querySelector('.product-section');

const btnHome = document.querySelector('.btn-home');

btnHome.addEventListener('click', () => {
    showSection(heroSection);
    showSection(categorySection);
    hiddenSection(productSection);
});

const btnCatalog = document.querySelector('.btn-catalog');

btnCatalog.addEventListener('click', () => {
    showSection(heroSection);
    showSection(categorySection);
    hiddenSection(productSection);
});

function getCategory() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './data/categories.json');
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        createCategoryCard(response);
    });

    xhr.send();
}

function createCategoryCard(responseData) {
    const categoriesContainer = document.querySelector('.category__container');
    categoriesContainer.innerHTML = '';

    responseData.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('category-card');

        card.innerHTML = `
            <img src="${element.image}" alt="" />
            <h2>${element.name}</h2>
            <p>${element.notes}</p>
        `;

        card.addEventListener('click', () => {
            hiddenSection(heroSection);
            hiddenSection(categorySection);
            showSection(productSection);
            addTitle(element.name);

            if (element.id === 4) {
                let randomIndex = Math.floor(Math.random() * 3) + 1;
                getProduct(randomIndex);
            } else {
                getProduct(element.id);
            }
        });

        categoriesContainer.appendChild(card);
    });
}

getCategory();

function getProduct(index) {
    const productContainer = document.querySelector('.product__conatainer');
    productContainer.innerHTML = '';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', './data/products.json');
    xhr.addEventListener('load', () => {
        const responseProduct = JSON.parse(xhr.responseText);

        for (const key in responseProduct) {
            if (responseProduct[key].categoryIndex === index) {
                createCategoryPage(responseProduct[key]);
            }
        }
    });

    xhr.send();
}

function createCategoryPage(products) {
    const productContainer = document.querySelector('.product__conatainer');

    productContainer.innerHTML += `
        <div class="products__list">
            <div class="product-card">
                <img src="${products.image}" alt="" />
                <h2>${products.name}</h2>
                <p>${products.description}</p>
                <p>${products.price}</p>
            </div>
        </div>
    `;
}

function showSection(sectionElement) {
    sectionElement.classList.remove('hidden');
}

function hiddenSection(sectionElement) {
    sectionElement.classList.add('hidden');
}

function addTitle(title) {
    const productTitle = document.querySelector('.products__title-catagory');
    productTitle.textContent = title;
}
