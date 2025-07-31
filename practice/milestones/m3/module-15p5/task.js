const url = 'https://github.com/ProgrammingHero1/js-array-tasks';

// task 1
const fruits = ['apple', 'mango', 'banana', 'orange', 'jackfruit'];
// console.log(fruits[2]);
fruits[1] = 'jambura';
// console.log(fruits);


// task 2
const places = ['sylhet', 'dhaka', 'ctg'];
places.push('rangamati');
places.push('chatok', 'rabu');
places.pop();
// console.log(places);


// task 3
const books = ['amar boi', 'bangla boi', 'english literature'];
if(books.includes('javascript')){
    console.log('javascript book is present');
} else{
    console.log('javascript book is not present');
}


// task 4
const message = 'this is a message';
const ar = [1, 43, 4];
const isRich = false;
console.log('is Array? :', Array.isArray(message));
console.log('is Array? :', Array.isArray(ar));
console.log('is Array? :', Array.isArray(isRich));



// task 5
const ar1 = [1,2,3,4];
const ar2 = [5,6,7];
const combAr = ar1.concat(ar2);
console.log('original array : ', ar1, ar2);
console.log('new array', combAr);