var num = 5;

//console.log(num);

var floatNum = 5.5;
// console.log(floatNum);

var name = 'Nayem Ahmed';
// console.log(name);

var isRich = true;
// console.log(isRich);
isRich = false;

// check type
// console.log(typeof isRich);

let num1 = 5;
let num2 = '6.5';

let total = num1 + parseInt(num2);
let total2 = num1 + parseFloat(num2);
console.log(total2);

let value = parseInt('abcdefg');
console.log(value, typeof value);

let a = 0.1, b = 0.2;
let result = a + b;
console.log(result.toFixed(1));

let p = result.toFixed(1); //will be string, use parseFloat(result.toFixed(1)); to keep as number
console.log(p, typeof p);

let x = 50 / 0;
console.log(x);

let y = -50 / 0;
console.log(y);


// increament or decreament
let ab = 5;
ab++;
console.log(ab);
ab--;
console.log(ab);
ab += 5; // ab = ab + 5
ab -= 5; // ab = ab - 5
ab *= 6; // ab = ab * 6
ab /= 7; // ab = ab / 7

// concatenation
console.log(2 + '4'); // concatenated
console.log(4 - '2'); //will not concatenate in - * and /, type conversion will be used
console.log(2 + 5 + '7'); // concatenation will start once a string is found