class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.life = true;
    }
    walk(){
        console.log(`human : ${this.name} is walking`);
    }
}
const h1 = new Human('Nayem', 25);
const h2 = new Human('Hajifa', 24);
console.log(h1);
console.log(h2);
h1.walk();