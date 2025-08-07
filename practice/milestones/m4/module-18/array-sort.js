const array = [2, 5, 1, 7, 3, 8, 9];
// console.log(array)
// console.log(array.sort())

const names = ['Nayem', 'Hajifa', 'Jui', 'Ahmed'];
// console.log(names);
// console.log(names.sort());

const array2 = [5, 2, 1, 11, 9, 3, 12, 20, 100];
console.log(array2.sort()) // [ 1, 100, 11, 12, 2, 20, 3, 5, 9 ]
// solution
// ascending
console.log(array2.sort(function(a, b){ return a - b; }));
// descending
console.log(array2.sort(function(a, b){ return b - a; }));