const students = [
    {id: 1, name: 'Nayem', mark: 75},
    {id: 2, name: 'Jui', mark: 55},
    {id: 3, name: 'Hajifa', mark: 81},
    {id: 4, name: 'Ahmed', mark: 85},
    {id: 5, name: 'Bugi', mark: 85},
];
const studentNames = students.map(student => student.name);
console.log(studentNames);

students.forEach(student => console.log(student));

const goodStudents = students.filter(student => student.mark >= 80);
console.log(goodStudents);

const first80 = students.find(student => student.mark >= 80);
console.log(first80);