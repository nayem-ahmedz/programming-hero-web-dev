// Js Math

console.log(Math.min(2, 1, 5, 6));
console.log(Math.max(2, 1, 5, 6));
console.log(Math.PI);

let PI = Math.PI;
PI = parseFloat(PI.toFixed(2));
console.log(PI); // with 2 digit, and as number/float

console.log(Math.abs(-5)); // 5, positive always

console.log(Math.round(2.2)); // 2
console.log(Math.round(2.5)); // 3

console.log('Floor', Math.floor(2.5)); // 2
console.log(Math.ceil(2.4)); // 3

console.log('Random value', Math.random());
console.log('Random value between 0-6:', Math.random() * 6);
console.log('Random value between 0-6 and pos:', Math.round(Math.random() * 6));

// produce numbers from 1 to 6, strictly
const random = Math.ceil(Math.random() * 6);


