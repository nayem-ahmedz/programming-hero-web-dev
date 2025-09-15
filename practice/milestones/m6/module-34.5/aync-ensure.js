async function one(){
    console.log('started inside async');
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();
    console.log('async ended');
}
function two(){
    console.log('inside two');
}

console.log('program started');
one();
console.log('program running...');
two();
console.log('program ended');