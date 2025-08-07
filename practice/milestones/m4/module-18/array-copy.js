const numbers = [3, 2, 4, 5];
// const ages = numbers;

// ages.push(5);
// console.log(numbers); // both are changed
// console.log(ages); // ages refers to numbers

// loop + push
const ages = [];
for(const number of numbers){
    ages.push(number);
}
ages.push(5); // it will not affect the original array
// console.log(numbers);
// console.log(ages)

// Array.from()
const ages2 = Array.from(ages);
ages2.push(6);
// console.log(ages);
// console.log(ages2);

// concat
const ages3 = [].concat(ages2);
ages3.pop();
// console.log(ages2);
// console.log(ages3);

// Spread Operator
const digits = [...ages];
digits.push(0);
console.log(digits);