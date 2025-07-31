const friends = ['Nayem', 'Hajifa', 'Ahmed'];

// shift : remove the first element of an array
const deleted = friends.shift();
console.log(friends, deleted);

// unshift : add one/many elements at the first of the array
const test = friends.unshift('Boss');
console.log(friends, test);



// practice
const arr = [1,2,3];
console.log(arr);

// arr = 5;
// console.log(arr);

// const len = arr.push(4, 5);
// const len = arr.pop()
// const len = arr.unshift(-1, 0);
const len = arr.shift();
console.log(arr)
console.log(len)