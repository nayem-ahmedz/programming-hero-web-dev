const url = 'https://github.com/ProgrammingHero1/js-string-tasks';

// Task 1 : count letter a
const sentence = 'Hey, I am Nayem Ahmed, I am a student';
let count = 0;
for(let i=0; i<sentence.length; i++){
    if(sentence[i] === 'a'){
        count++;
    }
}
console.log(count);

// Task 2 : count a | A
let count2 = 0;
for(let i=0; i<sentence.length; i++){
    if(sentence[i].toLowerCase() === 'a'){
        count2++;
    }
}
console.log(count2);


// Task 3
let string = 'Hey I am Nayem Ahmed';
string = string.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
let hasAll = true;
for(const char of vowels){
    if(!string.includes(char)){
        hasAll = false;
        break;
    }
}
hasAll ? console.log('contains all vowels') : console.log('does not contains all vowels');


// Task 4
string = 'I am going to watach a movie named X-men Appoclaples. It is from x-cinema series';
if(string.includes('x') || string.includes('X')){
    console.log('x | X found');
    string = string.replaceAll('x', 'y').replaceAll('X', 'Y');
    console.log(string);
} else{
    console.log('x | X not found')
}

// Task 5 : Capitalize Every first Letter of each word in a String
console.log('Task 5 below');
let cap = string.split(' ');
for(let i=0; i<cap.length; i++){
    cap[i] = cap[i][0].toUpperCase() + cap[i].slice(1);
}
cap = cap.join(' ');
console.log(cap);

// one line solution for task 5
// str = str.split(' ').map(word => word = word[0].toUpperCase() + word.slice(1)).join(' ')


// // using for of loop X not possible, you can only access the values, not the index
// let value = 'This is a lling sentence containing several words right?';
// let valueParts = value.split(' ');
// for(const part of valueParts){
//     part = part[0].toUpperCase() + part.slice(1);
// }
// console.log(valueParts);