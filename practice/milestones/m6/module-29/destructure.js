const product = {name: 'Mobile', price: 1200};

// const discount = product.price * 20 / 100;
// const pay = product.price - discount;

// const price = product.price; // another approach
// const discount = price * 20 / 100;
// const pay = price - discount;

// console.log(pay);

// destructuring
const {price} = product;
console.log(price);
const {name, age} = {name: 'Nayem', age: 25};
console.log(name, age);

// default parameter in destructuring
const {a, b=0} = {a: 5, c: 10};
console.log(a, b);

// alias
const {name: identifier, price: cost} = {name: 'tablet', price: 1000};
console.log(identifier, cost);

const numbers = [1, 2, 3, 4];
const [first, second] = numbers;
console.log(first, second);