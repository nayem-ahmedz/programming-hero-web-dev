const url = 'https://github.com/ProgrammingHero1/array-looping-tasks';

// Tssk 1
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const reverseCol = [];
for(let i=colors.length-1; i>=0; i--){
    reverseCol.push(colors[i]);
}
console.log(reverseCol);


// Tssk 2
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNums = [];
for(const num of numbers){
    if(num % 2 === 0){
        evenNums.push(num);
    }
}
console.log(evenNums);


// Tssk 3
let words = ['Tom', 'Tim', 'Tin', 'Tik']
let string = '';
for(const word of words){
    string = string + word;
}
console.log(string);


// Tssk 4
const statement = 'I am a hard working person';
const rev = statement.split(' ').reverse().join(' ');
console.log(rev);