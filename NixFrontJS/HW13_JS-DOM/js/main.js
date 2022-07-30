'use strict';

const progressBar = document.querySelector('.progressBar');
const section = document.querySelector('section');

const scrollProgressBar = () => {
	let scrollDistance = -(section.getBoundingClientRect().top);
	let progressPercentage = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;

	let value = Math.floor(progressPercentage);
	progressBar.style.width = value + '%';

	if (value < 0) {
		progressBar.style.width = '0%';
	}
};

window.addEventListener('scroll', scrollProgressBar);

//

function initElement() {
    let userInput;
    const numbers = [];

    while (userInput = prompt('Введите число', '')) {
    if (userInput === '' || isNaN(userInput)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    } else
        numbers.push(+userInput);
    }

    let openNewWindow = window.open();
    openNewWindow.alert(`Общая сумма чисел равна ${numbers.reduce((cur, next) => cur + next, 0)}`);
};

//

const themeToggle = document.getElementById('theme-toggle')
    const app = document.getElementById('app')

    function chosenTheme() {
        if(localStorage.getItem('theme') === 'dark') {
            app.classList.add('dark');
        }
        if(localStorage.getItem('theme') === 'light') {
            app.classList.add('light');
        }
    }

    const themeChange = () => {
        if(app.classList.contains('light')) {
            app.classList.remove('light');
            app.classList.add('dark');
            localStorage.removeItem('theme', 'light')
            localStorage.setItem('theme', 'dark')
        } else {
            app.classList.remove('dark');
            app.classList.add('light');
            localStorage.removeItem('theme', 'dark')
            localStorage.setItem('theme', 'light')
        }
    }
    themeToggle.addEventListener('click', themeChange)
chosenTheme()

//

document.onkeydown = function(e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
        return false;
    }      
}

//

let timeout = 600000;
let lastActiveTimestamp = 0;
let userIsActive = false;

window.addEventListener('mousemove', active);
window.addEventListener('keypress', active);
window.addEventListener('click', active);
window.addEventListener('scroll', active);

setInterval(checkUserIsActive, 1000)
active();

function checkUserIsActive() {
    if (userIsActive && new Date().getTime() - lastActiveTimestamp > timeout){
        
        let answer = confirm("Ви ще тут?");  
        if (answer === false)
        {
            close();
        } else 
        {
            active();
        }
    }
}

function active() {
    lastActiveTimestamp = new Date().getTime();
    if (!userIsActive) {
        userIsActive = true;
        console.log('user is active');
    }
}

//

document.write(navigator.userAgent);

//

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
    
        const blockID = anchor.getAttribute('href')
    
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}