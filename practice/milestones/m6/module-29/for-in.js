const person = {
    name: 'Nayem',
    age: 25,
    isStudent: true
};

for(const key in person){
    const value = person[key];
    // console.log(key, value);
}

const keys = Object.keys(person);
for(const key of keys){
    const value = person[key];
    console.log(key, value);
}