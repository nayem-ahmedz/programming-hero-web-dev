const student = {
    name: 'Nayem',
    age: 25,
    family: {
        title: 'Ahmed',
        // mother: {
        //     name: 'Mother',
        //     age: 40
        // }
    }
};
// const mother = student.family.mother.name;
// console.log(mother);
// If the object has no mother property -> show error :: use optional chaining

const mother = student.family.mother?.name;
console.log(mother); // undefined