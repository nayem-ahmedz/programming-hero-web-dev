const original = [1, 2, 3];
const copy = [];
for(const digit of original){
    copy.push(digit);
}
copy[0] = 99;
console.log(original);
console.log(copy);