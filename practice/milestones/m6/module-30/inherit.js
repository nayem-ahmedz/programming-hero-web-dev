class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}
class Dog extends Animal{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }
}
class Bird extends Animal{
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
    fly(){
        console.log(`${this.name} is flying, its color is ${this.color}`);
    }
}

const dog1 = new Dog('Tommoy', 2, 'deshi');
console.log(dog1);
dog1.eat();

const bird1 = new Bird('Dual', 1, 'black');
console.log(bird1);
bird1.fly();