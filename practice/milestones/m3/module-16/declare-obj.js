// 1. object literal
const obj1 = {name: 'Nayem', age: 25};

// 2. using new Keyword
const obj2 = new Object();
console.log(obj2);

// 3. using Object interface
const obj3 = Object.create({});
console.log(obj3);

// 4. using class
class Person{
    constructor(name){
        this.name = name;
    }
}
const obj4 = new Person('Nayem');
console.log(obj4)