// template string
const name = 'Nayem';
console.log(`My name is ${name}`);

const sum = (a, b) => a + b; // implicit return
console.log(sum(5,6));

// arrow function
const mul = (a, b) => {
    const multiply = a * b;
    return multiply;
}
console.log(mul(5, 6));

const getArguments = (...args) => {
    console.log(args);
}
getArguments(1,2,3);

// spread operator
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5, 6];