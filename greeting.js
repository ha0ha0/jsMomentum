const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
    SHOWING_CN = 'showing';

function saveName(text){
    localStorage.setItem(USER_LS, text)
}

function haddleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', haddleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello! ${text}` 
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //유저 없는경우
        askForName();
    }else{
        //유저 있는경우
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();