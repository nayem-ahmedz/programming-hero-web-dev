const url = 'https://github.com/ProgrammingHero1/js-function-practice-tasks';

// Task 1 : Take four parameters. Multiply the four numbers and then return the result
function mul(a, b, c, d){
    const result = a * b * c * d;
    return result;
}
const multiply = mul(1, 2, 3, 4);
console.log('Multiplilcation:', multiply);


// Task 2 : Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function condOp(num){
    if(num % 2 === 1){
        return num * 2;
    } else{
        return num / 2;
    }
}
const result = condOp(7);
console.log('Result:', result);


// Task 3 : Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(ar, size){
    let sum = 0;
    for(const num of ar){
        sum += num;
    }
    const avg = sum / size;
    return avg;
}
const ar = [1, 4, 2, 3, 6, 8];
const length = ar.length;

const avg = make_avg(ar, length);
console.log('Average:', avg);


// Task 4 : Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(str){
    let count = 0;
    for(const char of str){
        if(char === '0'){
            count++;
        }
    }
    return count;
}

const string = '010010010001';
const count = count_zero(string);
console.log("Count of 0's:", count);


// Task 5 : Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(number){
    return number % 2 === 0 ? 'Even' : 'Odd';
}

const number = 50;
const evenOdd = odd_even(number);
console.log('Number is:', evenOdd);