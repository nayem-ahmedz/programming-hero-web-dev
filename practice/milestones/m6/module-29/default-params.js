function sum(num1, num2){
    const sum = num1 + num2;
    // console.log(num1, num2, sum);
}
sum(5, 3); // 5, 3, sum = 8
sum(5) // 5 , undefined, sum = NaN
sum() // undefined undefined, 

function total(a = 0, b = 0){ // default params is used
    const total = a + b;
    console.log(a, b, total);
}
total(10, 12);
total(10); // 10, 0, 10
total();

/*
* add, sub -> 0
* mul -> 1
* string -> ''
* obj -> {}
* array -> []
*/

function getName(fast, last = ''){
    return fast + ' ' + last;
}
console.log(getName('Nayem'));

function greet(name = 'guest'){
    return 'Welcome ' + name;
}
console.log(greet('Hajifa'));
console.log(greet());