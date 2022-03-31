// Задача 1
let getDifference = x => Math.max.apply(null, x) - Math.min.apply(null, x);

console.log(getDifference([1, 2, 3, -4]));

// Задача 2
function wordNumber(words, numb) {
    const result = words.filter(word => word.length > numb);
    console.log(result);
}

console.log(wordNumber(['Привет', 'Здравствуйте', 'Ты', 'Оно'], 3));


// Задача 3
function getMissingElement(arr) {

    let m = [];
    let maxCount = Math.max.apply(Math, arr);
    let mincount = Math.min.apply(Math, arr);

    for (let i = mincount; i < maxCount; i++) {
        if (arr.indexOf(i) == -1) {
            m.push(i);
        }
    }
    console.log(m);
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));

// Задача 4
let solution = (str1, str2) => {
    let x = str2.length;
    let y = str1.length;

    while (x >= 0) {
        if (str2[x] !== str1[y]) return false;

        x--;
        y--;
    }

    return true;
}

console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));

// Задача 5
function averages(arr) {
    let result = [];
    if (!arr) {
        return result;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        result.push((arr[i] + arr[i + 1]) / 2);
    }
    return result;
}

averages([2, -2, 2, -2, 2]);
averages([1, 3, 5, 1, -10]);


// Задача 6
// Число в массиве, вернуть его в число не смог.
function numbs(n) {
    let maxNumb = String(n).split('').sort((a, b) => b - a).join(''); // забыл сразу добавить .join('')
    return parseInt(maxNumb); // а тут забыл сразу перевести строку в число с помощью parseInt()
};

console.log(numbs(35231));

// Вариант работает только если указывать что число это строка
// не понял сразу как перевести в число строку, всего лишь нужно было добавить parseInt() или +();
const numb = str => parseInt(str.toString().split('').sort((a, b) => (b - a)).join(''));
console.log(numb(124564));

// Задача 7
const scores = {
    "A": 100,
    "B": 14,
    "C": 9,
    "D": 28,
    "E": 145,
    "F": 12,
    "G": 3,
    "H": 10,
    "I": 200,
    "J": 100,
    "K": 114,
    "L": 100,
    "M": 25,
    "N": 450,
    "O": 80,
    "P": 2,
    "Q": 12,
    "R": 400,
    "S": 113,
    "T": 405,
    "U": 11,
    "V": 10,
    "W": 10,
    "X": 3,
    "Y": 210,
    "Z": 23
};

function nameScore(name) {
    let totalValue = 0;
    for (let i = 0; i < name.length; i++) {
        totalValue += scores[name[i]]
    }
    let title = "THE BEST";
    if (totalValue <= 60) {
        title = "NOT TOO GOOD"
    } else if (61 <= totalValue <= 300) {
        title = "PRETTY GOOD"
    } else if (301 <= totalValue <= 599) {
        title = "VERY GOOD"
    }
    return console.log(title);
}

nameScore('MUBASHIR')


// Задача 8
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(ltr => vowels.includes(ltr)).length;
}

countVowels("Celebration");
countVowels("Palm");

// Задача 9
function removeABC(str) {

    let array = str.split('').includes('a') || str.includes('b') || str.includes('c');
    if (array === false) {
        console.log(null); // не сразу понял как, но решение простое return null;
    } else {
        let result = str.replace(/a+/g, '').replace(/b+/g, '').replace(/c+/g, '');
        console.log(result);
    }

}

removeABC("This might be a bit hard");
removeABC("hello world!");


// Задача 10. Вариант 1
function difference(firstArray, secondArray) {
    let mergedArray = Array.from(new Set([...firstArray, ...secondArray]))

    mergedArray.sort(function(a, b) {
        return a - b;
    });
    console.log(mergedArray);

}

difference([1, 2, 3], [100, 2, 1, 10]);

// Задача 10. Вариант 2 
function difference(arr1, arr2) {
    let arr = arr1.concat(arr2);
    let mergedArray = [...new Set(arr)];
    mergedArray.sort(function(a, b) {
        return a - b;
    });
    console.log(mergedArray);
}

difference([1, 2, 3], [100, 2, 1, 10]);

// Задача 11
const array = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
const result = {};

Object.entries(array).forEach(([key, value]) => {
    result[value] = key
});

console.log(result);

// Задача 11. Вариант 2
const result = Object.fromEntries(Object.entries({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }).map(([k, v]) => [v, k]));

console.log(result);

// Задача 12
function calculateDifference(obj, limit) {
    let amt = Object.values(obj).reduce((a, b) => a + b);
    return Math.abs(amt - limit);
}

console.log(calculateDifference({ "baseball bat": 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));


// Задача 13 Что-то сложное, ещё вникаю.
const left = (string) => {
    let a = string;
    let b = [];
    let c = "";
    let d = [];
    let e = [];
    for (let i = 0; i < string.length; i++) {
        b.push(string[i]);
    }
    for (let j = 0; j < b.length; j++) {
        for (let k = 0; k < b.length; k++) {
            c += b[k];
        }
        e.push(c);
        d = b.shift();
        b.push(d);
        c = ""
    }
    return e;
}

console.log(left("abc"));
console.log(left("abcdef"));

// Задача 14
const doesBrickFit = (a, b, c, d, e) => {
    if (a <= d && c <= e) {
        return true;
    } else return false;
};


console.log(doesBrickFit(1, 1, 1, 1, 1));
console.log(doesBrickFit(1, 2, 1, 1, 1));
console.log(doesBrickFit(1, 2, 2, 1, 1));



let answer = prompt("War is over? (No / Yes)");

function dayToday(answer) {
    if (answer == 'No') {
        alert('Everything is like yesterday');
    } else if (answer == 'Yes') {
        alert('ДОБРОГО ВЕЧОРА, МИ З УКРАЇНИ!');
    }
}
console.log(dayToday(answer));