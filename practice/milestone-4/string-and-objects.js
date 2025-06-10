// 4 ways to declare string

let name = "Nayem Ahmed";
let name2 = 'ahmed nayem';
let message = `Welcome Mr ${name}`;
let wife = new String('Wifi');

// console.log(wife, typeof wife); // 'String' : 'WiFi', object type

const nums = [1, 2, 4, 5];
// console.log(nums);
nums[0] = 6;
// console.log(nums);

// console.log(name[0]); // N
name[0] = 'C';
// console.log(name); // still N

// String is immutable, Array is mutable

name = 'changed';
// console.log(name); // changed ? how : because variable is immutable, but not string

const book = 'English';
const note = 'english';

// if(book.toLowerCase() === note.toLowerCase()){ // if(book === note)
//     console.log('Both are similiar');
// } else{
//     console.log('Both are not similiar');
// }

const w1 = 'water';
const w2 = ' water'; // extra space at the start
// w1 === w2 ? console.log('same') : console.log('not same'); // use trim(), remove extra space at start/end of the string
//w1.trim() === w2.trim() ? console.log('same') : console.log('not same');


const city = 'Sylhet is the name of my city.';
const cityName = city.slice(0, 6);
// console.log(cityName);

// console.log(city.split('')); // output = s, y, l, h...
// console.log(city.split(' ')); // output = created a array diving the sentence by space
// console.log(city.split('t')) //output = divided by char t
const frineds = 'Rahim, Karim, Zaman, Baman';
// console.log(frineds.split(', ')); // rahim, karim, etc

// Join
const realFriends = frineds.split(', ');
// console.log(realFriends.join()); // Rahim,karim,etc
// console.log(realFriends.join(', ')); // Rahim, karim, etc

let fastName = 'Nayem';
let lastName = 'Ahmed';

let fullName = fastName + lastName;
// console.log(fullName);
fullName = fastName + ' ' + lastName;
// console.log(fullName);
fullName = fastName.concat(' ').concat(lastName);
// console.log(fullName);

// console.log(fullName.includes('N')); // true
// console.log(fullName.includes('X')); // false


// Reverse a string in various ways
let str1 = 'Hey I am Nayem Ahmed';
let revStr = '';
for(let i=0; i<str1.length; i++){
    // console.log(str1[i]);
    revStr = str1[i] + revStr;
}
// console.log(revStr);

// method 2
let revStr2 = '';
for(const letter of str1){
    revStr2 = letter + revStr2;
}
// console.log(revStr2);

// method 3
const revStr3 = str1.split('').reverse().join('');
// console.log(revStr3);

// console.log(revStr3.reverse()); X X X no direct reverse, split first
const ar = [1, 2, 3, 4];
// console.log(ar.reverse());

// console.log(revStr3.split('').reverse().join(''));




// # Object
const phone = {
    name: 'Samsung A2',
    model: 'SM-A02s',
    price: 1200,
    isActive: true,
    features: ['12 MP Camera', 'Full HD Display', '5000 mAh battery'],
    log: {
        name: 'logs',
        status: 'active',
        isActive: true
    }
}
// console.log(phone); // full object

// // **access object properties using two method . dot notation and [] Bracket notation

// console.log(phone.features);
// console.log(phone['features']);

const keyName = 'price'; // stroing key name in a string var

// phone[keyName] = 600;
// console.log(phone[keyName]);

// // ** find the keys and values : as a array
// console.log(Object.keys(phone));
// console.log(Object.values(phone));
// // find the entries
// console.log(Object.entries(phone));


// nested property
// console.log(phone['log']);
// console.log(phone['log'].status);

phone.log.name = 'log details';
// console.log(phone['log']['name']);


// // ***** how to delete a object property
// console.log(phone);
// delete phone.log;
// console.log(phone);

// delete phone; X X X Not Possible !
// console.log(phone);

// console.log(delete phone); // return false, it is not eligible, but obj using let can be null

// let student = {
//     name : 'Nayem',
//     age : 25
// }
// console.log(student);
// student = null;
// console.log(student);

// for(const key in phone){ // for of : obj is not iteration, using for in
//     // console.log(key);
//     delete phone[key]; // delete phone.key !not works
// }
// console.log(phone); // empty the const object, that cannot be deleted/null



// // *** looping through an object
// using for in
for(const key in phone){
    // console.log(key, ':', phone[key]);
}

const objKeys = Object.keys(phone);
// console.log(objKeys);
for(const key of objKeys){
    // console.log(key, ':', phone[key]);
}




// // *** Several ways to declare Object
const obj = {name : 'Ahmed', age: 25}; // known as object literal

// const obj2 = new Object(); // keep empty
// console.log(obj2);
// const obj22 = new Object({age: 24, aim: 'teacher'});
// console.log(obj22);

// const obj3 = Object.create({id: 1, age: 22}); // has some issues
const obj3 = Object.create({});
// console.log(obj3);

// //solved the issues, declare like this // still not solved
// const a1 = {id: 1};
// const ob = Object.create(a1);
// console.log(ob);

// object can be created using class


const zoo = {
    lion: 'meat',
    panda: 'bamboo'
};
// console.log(zoo.lion);
// console.log(zoo['panda']);

let animal = 'lion';
// console.log(zoo[animal]);

