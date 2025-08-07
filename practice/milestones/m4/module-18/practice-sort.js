const numbers = [15, 2, 1, 10, 5, 7, 44, 50];
const sorted = numbers.sort(function(a, b){return a - b;});

console.log(numbers);
console.log(sorted);

const sortedDesc = numbers.sort((a, b) => b - a);
console.log(sortedDesc);