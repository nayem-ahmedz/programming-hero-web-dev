const url = 'https://github.com/ProgrammingHero1/js-string-tasks';

// task 1
const string = 'This is a nice and cute bird named Aoda';
let count = 0;
for(const char of string){
    if(char === 'a'){
        count++;
    }
}
console.log('a:', count);

// task 2
let count2 = 0;
for(const char of string){
    if(char.toLowerCase() === 'a'){
        count2++;
    }
}
console.log('a/A:', count2);

// task 3
const vowels = ['a', 'e', 'i', 'o', 'u'];
let hasAllVowel = 0;
for(const vowel of vowels){
    if(string.toLowerCase().includes(vowel)){
        hasAllVowel++;
    }
}
console.log('has all vowels :', hasAllVowel === 5 ? true : false);

// task 4
const sentence = 'I am a heavy gamer who dont like playing Youbix on X-box';
let modSent = '';
for(let char of sentence){
    if(char === 'x') char = 'y';
    if(char === 'X') char = 'Y';
    modSent = modSent + char;
}
console.log(modSent);

// task 5
let words = sentence.split(' ');
for(let word of words){
    word = word.slice(0,1).toUpperCase() + word.slice(1)
}
console.log(words.join(' '))

// one line
// const capitalized = sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
// console.log(capitalized)