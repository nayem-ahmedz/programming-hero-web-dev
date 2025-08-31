const person = {
    name: 'Nayem',
    age: 25,
    isStudent: true
};

const keys = Object.keys(person); // return all keys in a []
console.log(keys);
const values = Object.values(person); // returns all valuees in a []
console.log(values);
const entries = Object.entries(person); // return key-value pairs in a []
console.log(entries);