// Aray : collection of similiar items

const numbers = [1, 3, 4, 7, 10];
const names = ['Nayem', 'Ahmed', 'Hajifa'];
const passed = [true, false, true];
const mixedArr = [1, true, 'Mixed', 5.5]; // mixing is not recommended, for performance issues

// console.log(numbers);
// console.log(names);
// console.log(passed);
// console.log(mixedArr);

// Length of an Array
// console.log(numbers.length);

// Push : add element in the array at the end, after last index
numbers.push(12);
// numbers.push(1, 2, 5);
// console.log(numbers);

numbers.pop(); //one element, remove it and return it
console.log(numbers);

// you can store popped item if you wish
let deletedItem = numbers.pop();
console.log(numbers);
console.log('Deleted : ' + deletedItem);


// oppostie of push pop that works at first of the array
// shift, remove the first item
numbers.shift();
console.log(numbers);
numbers.unshift(20); //add an element at the starting
console.log(numbers);


// includes
console.log(names.includes('Nayem')); // true
console.log(names.includes('nayem')); // false, case sensitive

if(names.includes('Hajifa')){
    console.log('Found Hajifa');
} else{
    console.log('Not Found!');
}


// find the index of an item
console.log('Index :', numbers.indexOf(7));
console.log(numbers.indexOf(5)); // -1 , means it is not found

// check weather array or not
console.log(Array.isArray(numbers));

const ar1 = [1, 2, 3];
const ar2= [4, 5, 6, 7];

// console.log(ar1.join()); // 1, 2, 3
console.log(ar1.join('+')); // 1+2+3

console.log(ar1.concat(ar2));