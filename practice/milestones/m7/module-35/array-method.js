const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

numbers.forEach(number => console.log(number * 2));

console.log(numbers.filter(number => number % 2));
console.log(numbers.find(number => number % 2 === 0));