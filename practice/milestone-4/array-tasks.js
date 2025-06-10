// Question link = https://github.com/ProgrammingHero1/js-array-tasks/tree/main


// Problem 1
const fruits = ['Apple', 'Banana', 'Mango', 'Strawberry', 'Pineapple'];
console.log(fruits[2]);
fruits[1] = 'Jambura';
console.log(fruits);

// Problem 2
const spots = ['Jaflong', 'Khagrasori', 'Cox Bazar'];
spots.push('Bandarban');
spots.push('Sylhet', 'Taj Mohol');
let detedSpot = spots.pop();
console.log(spots);
console.log('Deleted Spot is : ' + detedSpot);

// Problem 3
const books = ['HTML', 'CSS', 'Javascript', 'PHP'];
let message = '';
if(books.includes('Javascript')){
    message = 'Element is present!';
} else{
    message = 'Element is not present!';
}
console.log(message);

// Problem 4
const ar = 1;
const arr = [];
const name = 'Ahmed';
let num = 10;
const fruits2 = ['Apple', 'Banana'];

function isArray(a){
    if(Array.isArray(a)){
        console.log(a, '> It is an Array element');
    } else{
        console.log(a, '> It is not an Array element');
    }
}
isArray(ar);
isArray(arr);
isArray(name);
isArray(num);
isArray(fruits2);

// Problem 4
const n1 = [1, 2, 3, 4];
const n2 = [7, 8, 9];
const concatedAr = n1.concat(n2);

console.log('Original Arrays :', n1, n2);
console.log('Concatenated Array :', concatedAr);