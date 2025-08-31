const numbers = [2, 1, 4, 5, 7];
console.log(numbers); // [2, 1, 4, 5, 7]
console.log(...numbers); // 2, 1, 4, 5, 7

const max = Math.max(...numbers);
console.log(max);

// const numbers2 = numbers;
// numbers2.push(5); // it effect number as well, due to reference
// console.log(numbers, numbers2);

const numbers2 = [...numbers]; // correct approach, create a new array and spreading numbers
const numbers3 = [1, ...numbers, 5, 6, 7];

const person = {name: 'Nayem'};
const student = {...person, age: 25};
console.log(person, student);

function sum(a, b, c){
    return a + b + c;
}
const arr = [1, 2, 3];
console.log(sum(...arr));