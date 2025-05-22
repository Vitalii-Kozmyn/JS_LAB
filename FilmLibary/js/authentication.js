const btnOpenLoginForm = document.querySelector(".nav__button--login");
const btnOpenLoginForm__mobile = document.querySelector(".btn-mobile--login");
const modalWindow = document.querySelector(".modal-window");
const loginForm = document.querySelector(".modal__login");
const btnCloseModalForm = document.querySelector(".close-btn--modal");
const linkRegister = document.getElementById("showRegister");
const registerForm = document.querySelector(".modal__register");
const linkLogin = document.getElementById("showLogin");

const mobileNav2 = document.querySelector(".mobile-nav")

const formLogin = document.getElementById("loginForm");
const formRegister = document.getElementById("registerForm");
const logoutBtn = document.getElementById("logoutBtn");
const loginBtnDesktop = document.querySelector(".nav__button--login");
const usernameDisplay = document.getElementById("username-display");
const logoutBtnMobile = document.getElementById("logoutBtnMobile");

function lockScroll() {
    document.body.style.overflow = 'hidden';
}

function unlockScroll() {
    document.body.style.overflow = '';
}

function ShowModalForm(){
    modalWindow.classList.remove("hidden");
    loginForm.classList.remove("hidden");
    lockScroll();
}

function HideModalForm() {
    modalWindow.classList.add("hidden");
    loginForm.classList.add("hidden");
    unlockScroll();
}

function ShowRegisterForm() {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
}

function ShowLoginForm() {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
}

btnOpenLoginForm.addEventListener("click", ()=>{
    ShowModalForm();
    registerForm.classList.add("hidden");
})

btnCloseModalForm.addEventListener("click", ()=> {
    HideModalForm();
})

linkRegister.addEventListener("click", ()=> {
    ShowRegisterForm();
})

linkLogin.addEventListener("click", ()=> {
    ShowLoginForm();
})

btnOpenLoginForm__mobile.addEventListener("click", ()=>{
    ShowModalForm();
    mobileNav2.classList.remove('open');
})

function saveUserToLocalStorage(username) {
    localStorage.setItem("loggedInUser", username);
    updateUIForLoggedInUser();
}

function updateUIForLoggedInUser() {
    const user = localStorage.getItem("loggedInUser");

    if (user) {
        loginBtnDesktop.classList.add("hidden");
        btnOpenLoginForm__mobile.classList.add("hidden");
        logoutBtn.classList.remove("hidden");
        logoutBtnMobile.classList.remove("hidden");
        
        usernameDisplay.textContent = user;
        usernameDisplay.classList.remove("hidden");
        if(user == "Mustafa") {
            usernameDisplay.style.color = "#1F140E";
        }
    } else {
        loginBtnDesktop.classList.remove("hidden");
        btnOpenLoginForm__mobile.classList.remove("hidden");
        logoutBtn.classList.add("hidden");
        logoutBtnMobile.classList.add("hidden");
        
        usernameDisplay.classList.add("hidden");
        usernameDisplay.style.color = "rgb(240, 248, 255)";
    }
}


formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const storedUser = JSON.parse(localStorage.getItem("user_" + username));

    if (storedUser && storedUser.password === password) {
        saveUserToLocalStorage(username);
        HideModalForm();
        alert("Вхід успішний!");
    } else {
        alert("Невірний логін або пароль.");
    }
});

formRegister.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("register-username").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value.trim();

    if (localStorage.getItem("user_" + username)) {
        alert("Користувач з таким логіном вже існує.");
        return;
    }

    localStorage.setItem("user_" + username, JSON.stringify({ email, password }));
    alert("Реєстрація успішна! Можна входити.");
    ShowLoginForm();
});

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    updateUIForLoggedInUser();
    alert("Ви вийшли з акаунту.");
});

logoutBtnMobile.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    updateUIForLoggedInUser();
    alert("Ви вийшли з акаунту.");
});

window.addEventListener("DOMContentLoaded", updateUIForLoggedInUser);