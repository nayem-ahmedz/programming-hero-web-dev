// problem 1
var cash = 1000;
var cost = 700;
var returN = cash - cost;

console.log('Returned : ', returN);

//problem 2
var bangla = 70;
var engllish = 80;
var math = 60;
var avg = (bangla + engllish + math) / 3;
console.log('Average : ', avg);

// problem 3
let input = 119;
let rem = input % 5;
console.log('Remainder :', rem);

//problem 4
const a = isNaN('11');
console.log(a); // false
const b = isNaN(2 - 11);
console.log(b); // false
const c = isNaN('2a2');
console.log(c);