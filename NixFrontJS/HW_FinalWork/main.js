// Задача 6
class User {
    constructor(name, surname, year) {
        this.name = name;
        this.surname = surname;
        this.year = year;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super();
        this.name = name;
        this.surname = surname;
        this.year = year;
    }

    getCourse() {
        let today = new Date();
        let actualyear = today.getFullYear();
        return actualyear - this.year;
    }
}

var student = new Student('Maxim', 'Ceaus', 2019);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());

// Задача 7
function counter() {
	let i = 1;
	return function() {return i++};
}

const func = counter();

console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());

// Задача 8
const nums = new Set();

while ( nums.size !== 100 ) {
  nums.add(Math.ceil(Math.random() * 100));
}

console.log([...nums]);

// Задача 9
const elems = document.getElementsByTagName('div');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', setRed);
}

function setRed() {
	this.style.background = 'red';
	this.removeEventListener('click', setRed);
	this.addEventListener('click', setGreen);
}

function setGreen() {
	this.style.background = 'green';
	this.removeEventListener('click', setGreen);
	this.addEventListener('click', setRed);
}

// Задача 10
let promise1 = new Promise((resolve, reject) =>

setTimeout(() => {resolve(5);}, 3000));

promise1.then((result) =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(Math.pow(result, 2));}, 3000))
    ).then(
        (result) =>
            new Promise((resolve, reject) =>
                setTimeout(() => {
                    resolve(Math.pow(result, 2));}, 3000))
    ).then(
        (result) =>
            alert(result)
    );

// Задача 11
let promise = new Promise((resolve, reject) => {

console.log(1);

setTimeout(() => resolve(5), 3000)}
    ).then(

    function(result) {
        console.log(2);
    
        return new Promise((resolve, reject) =>
    
        setTimeout(() => resolve(Math.pow(result, 2)), reject('error'), 3000));
    }, 
        function(error) {
            throw new Error('critical error')
        }
    ).then(
    
        function(result) {
            console.log(3);
    
            return new Promise((resolve, reject) =>
    
            setTimeout(() => resolve(Math.pow(result, 2)), 3000));
    }
    ).then(
        result => console.log(result)
    ).catch(
        error => console.log(error)
    );

// Задача 12 (дубликат в задании)

// Задача 13
function gdate(elem) {
	let inputValue = elem.value;
	let date = new Date();
	let fromNow = Date.parse(String(date.getFullYear()) + '-' + (date.getMonth() + 1) + '-' + date.getDate());
	let fromTarget = Date.parse(inputValue);
	let result = (fromTarget - fromNow) / (1000 * 60 *60 *24) ;

	document.getElementById("output").innerHTML = Math.round(result);
}

// Задача 14
let arr = [2, -4, 6, 0, 8, -10, 12, -22];
function func(elem){return elem > 0};
let arrTemp = arr.filter(func);

let resul = arrTemp.map(function(elem) {
	return Math.sqrt(elem);
});
alert(resul);

// Задача 15
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const grade = Math.floor(Math.random() * 4) + 2;
        if (grade > 3) {
            resolve(grade);
        }
            reject(grade);
    }, 5000);
});

promise
    .then(result => console.log(`Ура! Я получил оценку ${result}!`))
    .catch(result => console.log(`Эх, я получил оценку ${result}!`));


// Задача 16
let func2 = function(){
	let a = 0;
	let b = 1;
	let temp;
	return function() {
		this.nextElementSibling.innerHTML = a;
		temp = a;
		a = b;
		b = temp +a;
	};
}

let buts = document.getElementsByTagName('button');
for (let i = 0; i < buts.length; i++) {
	buts[i].addEventListener('click', func2());
}

// Задача 17
function fcalc(){
	var	inp = document.querySelectorAll("#calc input");
	var sum = 0;
	for(var i=0; i<inp.length-1; i++){
		sum = sum + Number(inp[i].value);	
	}
	inp[3].value=sum;
}

// Задача 18 (нет условий)
// Задача 19
function Human(name, sex, lang, age) {
this.name = name;
this.sex = sex;
this.lang = lang;
this.age = age;
}

Human.prototype.eldest = function(humans) {
    let maxAge = 0;
    humans.forEach(function(human) {
    if (human.age > maxAge)
        maxAge = human.age;
});
    alert(maxAge);
};

let human = new Human();
let humans = [];
humans.push(new Human("Виктор", "М", "американец", 28));
humans.push(new Human("Саня", "М", "венгр", 22));
humans.push(new Human("Екатерина", "Ж", "украинка", 25));
humans.push(new Human("Эдуард", "М", "грузин", 36));

human.eldest(humans);

// Задача 20


// Задача 21


// Задача 22
class MultiplicatorUnitFailure extends Error{}

function primitiveMultiply(a,b){
    if(Math.random() < 0.2){
        return a*b
    } else {
        throw new MultiplicatorUnitFailure("Klunk")
    }
}

function reliableMultiply(a,b){
    try {
        return primitiveMultiply(a,b)
    } catch(e){
        if(e instanceof MultiplicatorUnitFailure){
            return reliableMultiply(a,b) 
        } else {
            throw `Caught a problem ${e}`
        }
    }
}

console.log(reliableMultiply(8,8))