let name = 'Nayem';
const country = 'Bangladesh';
console.log(name, country);

const frineds = ['Hajifa', 'Ahmed', 'Jui'];
frineds.push('new/last');
frineds.pop(); // last one
frineds.unshift('new/first');
frineds.shift(); // frist one
console.log(frineds);

console.log(frineds.slice(1,2));
console.log(frineds.splice(1,2));

function sum(a, b){
    // console.log(arguments);
    // console.log(...arguments);
    const result = a + b;
    return result;
}
const out = sum(5, 3);
console.log(out);

console.log(5 > 2);
console.log(5 > 2 && 4 < 5);
console.log(5 > 2 && 7 < 5);
console.log(5 > 2 || 7 < 5);