// function declaration
function add(a, b){
    return a + b;
}
console.log(add(7, 9));

// function expression
const total = function(a, b){
    return a + b;
}
console.log(total(2, 3));

// arrow function
const square = num => num * num; // if 1 param, () is not needed
console.log(square(4));

const sum = (a, b) => a + b;
console.log(sum(4, 3));

// multiline arrow func need explicit return keyword
const doMath = (a, b) => {
    const double = a * 2;
    const triple = b * 3;
    const result = double + triple;
    return result;
}
console.log(doMath(5, 2));

// const greet = (first, last) => 'welcome ' + first + ' ' + last;
// console.log(greet('Nayem', 'Ahmed'))