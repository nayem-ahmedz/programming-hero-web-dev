// link : https://github.com/ProgrammingHero1/js-object-tasks

// Task 1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors['golden rod']);


// Task 2
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['passenger capacity'] = 5;
console.log(car['passenger capacity']);

// Task 3
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);

// Task 4
let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(Object.keys(student2).length);

// Task 5
let object = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
for(const key in object){
    console.log(`key: ${key} | type: ${typeof object[key]}`);
}