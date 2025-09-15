const person = {
    name: 'Nayem',
    frinds: ['Hajifa', 'Jui']
};
const personJson = JSON.stringify(person);
console.log(personJson);

const personObj = JSON.parse(personJson);
console.log(personObj);

// fetch
/* fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));
*/

const keys = Object.keys(person);
const values = Object.values(person);
console.log(keys, values);