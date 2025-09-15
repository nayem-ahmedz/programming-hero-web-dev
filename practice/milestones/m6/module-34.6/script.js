localStorage.setItem('name', 'Nayem');
console.log(localStorage.getItem('name'));

const person = {
    name: 'Hajifa',
    age: 24
};
// localStorage.setItem('person', person);
// console.log(localStorage.getItem('person')); // object object
const personJson = JSON.stringify(person);
localStorage.setItem('person', personJson);
const storedPerson = localStorage.getItem('person');
console.log(typeof storedPerson, storedPerson);

const objPerson = JSON.parse(storedPerson);
console.log(typeof objPerson, objPerson);


// array
const nums = [1, 3, 4, 5, 6];
// localStorage.setItem('nums', nums); array turned into string
// console.log(localStorage.getItem('nums'));

const jsonNums = JSON.stringify(nums);
localStorage.setItem('nums', jsonNums);
const storedNums = JSON.parse(localStorage.getItem('nums'));
console.log(typeof storedNums, storedNums);