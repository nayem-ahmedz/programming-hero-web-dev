const statement = 'I am a hard working person';

const words = statement.split(' ');
const wordsArr = [];
let j = 0;
while(j < words.length){
    wordsArr.unshift(words[j]);
    j++;
}
console.log(wordsArr.join(' '));

// oneline solution
const reversePos = statement.split(' ').reverse().join(' ');
console.log(reversePos);