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
    const $clock = document.querySelector(".clock");
    const hour = Number($clock.innerText.slice(0, 2));
    let greet = '';

    if(hour>=0 && hour<12) {
        greet = 'Good Morning';
    } else if(hour>=12 && hour<18) {
        greet = 'Good Afternoon';
    } else if(hour>=18 && hour<24) {
        greet = 'Good Evening';
    }
    
    $greeting.innerHTML = `${greet}, ${username}!`;
    $greeting.classList.remove(HIDDEN_CLASSNAME);
}