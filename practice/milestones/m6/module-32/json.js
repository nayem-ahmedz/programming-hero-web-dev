const student = {
    name: 'Nayem',
    age: 25,
    isActive: true,
    frineds: ['Hajifa', 'Jui', 'Ahmed']
};

console.log(student, typeof student);

const jsonStudent = JSON.stringify(student);
console.log(jsonStudent, typeof jsonStudent);

const parsedStudent = JSON.parse(jsonStudent);
console.log(parsedStudent, typeof parsedStudent);