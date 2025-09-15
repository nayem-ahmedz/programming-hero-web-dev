// falsy value
// null, undfined, 0, -0, empty string '', etc

// truthy value
// not falsy : 1, -1, {}, [] etc

// ternary operator
// const name = '';
const name = 'Nayem';
name ? console.log('truthy') : console.log('falsy');

const age = (name && name === 'Nayem') ? 25 : 'not found';
console.log(age);



// shortcut
const isActive = false;
const showUser = () => console.log('show user green');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();

// if you only want to run true part
isActive && showUser();
// if false part
isActive || hideUser();