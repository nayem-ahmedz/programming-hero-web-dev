const numbers = [4, 1, -20, -7, 5, 9, -6];
const posNumbers = removeNeg(numbers, (numb) => numb >= 0);

function removeNeg(numbers, callback){
    const ar = [];
    for(const numb of numbers){
        if(callback(numb)){
            ar.push(numb);
        }
    }
    return ar;
}

console.log(posNumbers);

function isPos(number){
    const result = number >= 0;
    return result;
}
console.log(isPos(10));
console.log(isPos(-10));

const posNumbers2 = numbers.filter(numb => numb >= 0);
console.log(posNumbers2);



// function print(value){
//     console.log(value);
// }

// function sum(a, b, callback){
//     const sum = a + b;
//     callback(sum);
// }

// let a = 5, b = 8;
// sum(a, b, print);