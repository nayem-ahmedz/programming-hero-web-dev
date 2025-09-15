const frineds = ['Nayem', 'Ahmed', 'Hajifa'];
const [first, ,last] = frineds;
console.log(first, last);

const person = {
    name: 'Hajifa',
    age: 24,
    status: 'active'
};
const {age, status:studentship, country = 'BD'} = person;
console.log(age, studentship, country);