var words = ['Tom', 'Tim', 'Tin', 'Tik'];
let string = '';
for(const word of words){
    // string += word;
    string = string.concat(word);
}
console.log(string);