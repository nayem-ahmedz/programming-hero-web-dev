const url = 'https://github.com/ProgrammingHero1/js-problems-part1-practice-tasks';

// Task 1 : Write a function to convert temperature from Celsius to Fahrenheit
function celsToFahrenH(celcious){
    const fahrenheit = (celcious * (9 / 5) ) + 32;
    return fahrenheit;
}

const temperature = celsToFahrenH(33);
console.log(temperature);


// Task 2
function repeatedNum(arr, key){
    let count = 0;
    for(const num of arr){
        if(num === key){
            count++;
        }
    }
    return count;
}
const arr = [5,6,11,12,98, 5];

console.log(repeatedNum(arr, 5));
console.log(repeatedNum(arr, 25));


// Task 3 : Write a function to count the number of vowels in a string.
function countVowels(str){
    str = str.toLowerCase();
    let count = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count;
}

const str = 'Nayem Ahmed';
const vowelCounts = countVowels(str);
console.log('Count of vowels :', vowelCounts);


// Task 4 : Write a function to find the longest word in a given string
function findLongestWord(str){
    str = str.split(' ');
    let longestWord = '';
    for(const word of str){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

const string = 'I am learning Programming to become a programmer';
const longestWord = findLongestWord(string);
console.log(longestWord);


// Task 5 : Generate a random number between 10 to 20
function getRandom10to20(){
    const random = Math.round(Math.random() * 10) + 10;
    return random;
}

const randomNumber = getRandom10to20();
console.log(randomNumber);


// checking if it really generate numbers between 10 to 20, found true
// const uniqe = [];
// for(let i=0; i<1000; i++){
//     const randomNumber = getRandom10to20();
//     if(!uniqe.includes(randomNumber)){
//         uniqe.push(randomNumber);
//     }
// }
// console.log(uniqe.sort((a,b) => a - b));