// swap witout swap function
let a = 5;
let b = 2;

console.log(a, b);
let temp = a;
a = b;
b = temp;
console.log(a, b);


// destructing method
let p = 5;
let q = 12;

console.log(p, q);
[p, q] = [q, p];
console.log(p, q);