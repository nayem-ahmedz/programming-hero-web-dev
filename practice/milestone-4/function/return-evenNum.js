function evenNumbers(ar){
    const even = [];
    for(const num of ar){
        if(num % 2 === 0){
            even.push(num);
        }
    }
    return even;
}

const numbers = [2, 1, 5, 7, 3, 9, 2, 4, 5, 12];
const even = evenNumbers(numbers);
console.log('Even Numbers:', even);

function evenSum(arr){
    const nums = evenNumbers(arr);
    let sum = 0;
    for(const num of nums){
        sum += num;
    }
    return sum;
}

const sum = evenSum(numbers);
console.log('Sum of numbers:', sum);