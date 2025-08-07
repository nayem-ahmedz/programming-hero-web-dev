const studentList = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];
for(const student of studentList){
    const data = student.name + ' scored ' + student.marks;
    console.log(data);
}