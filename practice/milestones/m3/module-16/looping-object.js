const student = {
    name: 'Nayem',
    age: 25,
    marks: [80, 75, 85],
    address: {
        village: 'Khomia',
        zilla: 'Sylhet'
    }
}
// console.log(student);

// for in
for(const key in student){
    console.log(key, ':', student[key]);
}

// using Object.keys + for of
const allKeys = Object.keys(student); // return all the keys in a array
for(const key of allKeys){
    console.log(student[key])
}