class Human{
    constructor(name){
        this.name = name;
    }
    getThis(){
        return this;
    }
}
const h1 = new Human('Nayem');
// console.log(h1);
console.log(h1.getThis()); // Human {name: 'Nayem'};

const object = {
    name: 'Hajifa',
    getThis: function(){ console.log(this) },
    getArrowThis: () => { console.log(this) }
}
object.getThis(); // return entire object
object.getArrowThis(); // return {}, because arrow func has no this 

console.log(this) // global this