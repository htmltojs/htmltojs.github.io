const arr = [10, 20, 30, 50, 235, 3000];
let result = arr.filter(num => ['1','2','5'].includes(num.toString()[0]));

console.log(result);


const arr = [10, 20, 30, 50, 235, 3000];
const num = ['1', '2', '5'];

let result = [];

arr.forEach(e => num.includes(e.toString()[0]) ? result.push(e) : undefined)

console.log(result);


