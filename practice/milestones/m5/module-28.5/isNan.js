const num = 5;
console.log(typeof num); // number

const ar = [4, 5, 6];
// console.log(typeof ar);
// console.log(typeof(ar));
console.log(Array.isArray(ar)); // true
const obj = {name: 'Nayem'};
console.log(Array.isArray(obj)); // false
console.log(typeof obj); // object

console.log(isNaN(num)); // false
console.log(isNaN(obj)); // true
console.log(isNaN(ar)); // true
console.log(isNaN([5,6])); // true
console.log(isNaN([5])); // false