let today = Date(); // just return the date string of today
today = new Date(); // create a date object, others method can be used. today.getFullYear()

// console.log(today);
// console.log(today.getDate()); // date 12
// console.log(today.getFullYear()); // 2025
// console.log(today.getMonth()); // return 5, its a index, that mean 6th month = june
console.log(today.getTime()); // return 

console.log(Date.now());