const numbers = [1, 2, 3, 4, 5];
const doubleIt = [];
for(const num of numbers){
    const double = num * 2;
    doubleIt.push(double);
}

// using map
const doubleFunc = num => num * 2;
const doubleIt2 = numbers.map(doubleFunc);
console.log(doubleIt2);

// one line
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// more oneliner
const friends = ['Nayem', 'Hajifa', 'Haj', 'Ahmed', 'WP'];
const friendsNameLength = friends.map(name => name.length);
console.log(friendsNameLength);
// map has 3 params : element, index
const friendsData = friends.map((name, index) => {
    return `${name} at index ${index} has length ${name.length}`;
});
console.log(friendsData);