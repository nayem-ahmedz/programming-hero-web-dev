console.log(a); // can access before initialize, undefined
var a = 5;
console.log(a) // 5

// console.log(b); // cannot access before initialize
let b = 10;
console.log(b);
// let b = 'redecalre not possible';
{
    let b = 'b in function';
    console.log(b);
}

c = 'magic';
console.log(c);

const pi = 3.1416;
// pi = 5; // error : assignment to constant variable
console.log(pi)