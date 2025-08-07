const list = [
    { name: 'Nayem', age: 25 },
    { name: 'Hajifa', age: 24 },
    { name: 'Ahmed', age: 25 }
];
// console.log(list);
list[0].age = 26;
// console.log(list[0]);

for(const person of list){
    // console.log(person);
    const personInfo = person.name + ' : ' + person.age;
    console.log(personInfo);
}