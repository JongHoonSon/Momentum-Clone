const $loginForm = document.querySelector(".login-form");
const $loginInput = document.querySelector(".login-form input");
const $greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

checkUserLogin();

function checkUserLogin() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if(savedUsername === null) {
        $loginForm.classList.remove(HIDDEN_CLASSNAME);
        $loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        paintGreetings(savedUsername);
    }
}

function onLoginSubmit(event) {
    event.preventDefault();
    $loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = $loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    $greeting.innerHTML = `Hello ${username}`;
    $greeting.classList.remove(HIDDEN_CLASSNAME);
}