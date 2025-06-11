function isEven(num){
    if(num % 2 === 0){
        return true;
    } else{
        return false;
    }
}

// console.log(isEven(5));
// console.log(isEven(6));

function isOdd(num){
    if(num % 2 === 1){
        return true;
    }
    return false;
}

// console.log(isOdd(20));
// console.log(isOdd(21));

const number = 20;
isEven(number) ? console.log('Even', number) : console.log('Odd', number);