const person = {
    name: 'Nayem',
    age: 25,
    isStudent: true
};

Object.freeze(person); // prevent add/remove and modification
Object.seal(person); // prevent add/remove but allow modify existing properties
delete person.isStudent;
person.status = 'active';
person.age = 26;
console.log(person);