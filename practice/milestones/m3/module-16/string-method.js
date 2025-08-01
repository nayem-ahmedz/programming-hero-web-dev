let name = 'Nayem Ahmed';

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

let name2 = ' Nayem Ahmed ';
// console.log(name === name2); // false
// console.log(name === name2.trim()); // true

const firstName = name.slice(0,5);
console.log(firstName);

const frinedStr = 'Abid,Sabid,Kabid,Javid';
// const frineds = frinedStr.split(); // [ 'Abid,Sabid,Kabid,Javid' ]
// const frineds = frinedStr.split(''); // [ 'A', 'b', 'i', ... ]
const frineds = frinedStr.split(','); // [ 'Abid', 'Sabid', 'Kabid', 'Javid' ]
console.log(frineds);

console.log(frineds.join()); // Abid,Sabid,Kabid,Javid
console.log(frineds.join('')); // AbidSabidKabidJavid
console.log(frineds.join('+')); // Abid+Sabid+Kabid+Javid