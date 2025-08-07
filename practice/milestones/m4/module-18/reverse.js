const numbers = [1, 2, 4, 3, 6, 8, 5];

// for loop & unshift
const reverse = [];
for(let i=0; i<numbers.length; i++){
    reverse.unshift(numbers[i]);
}
console.log(reverse);

// for loop from length - 1 & push
for(let i=numbers.length-1; i>=0; i--){
    reverse.push(numbers[i]);
}
console.log(reverse);

// built in reverse method
const reversed = numbers.reverse();
console.log(reversed);