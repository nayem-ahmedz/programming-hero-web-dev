const string = 'I am a web developer';

let reversed = '';
for(const letter of string){
    reversed = letter + reversed;
}
console.log(reversed);

// approach 2
let reversed2 = '';
for(let i=0; i<string.length; i++){
    reversed2 = string[i] + reversed2;
}
console.log(reversed2);


// approach 3
const reversed3 = string.split('').reverse().join('');
console.log(reversed3);