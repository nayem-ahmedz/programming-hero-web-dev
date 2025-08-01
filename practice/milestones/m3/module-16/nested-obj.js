const school = {
    name: 'bhadeshwar nasir uddin',
    address: {
        village: 'bhadeshwar',
        postInfo: {
            no: 3162,
            name: 'south bhadeshwar'
        }
    }
}
console.log(school.address.village);
console.log(school['address']['postInfo'].name);

// console.log(Object.keys(school))
// console.log(Object.values(school))

delete school.address;
console.log(school);