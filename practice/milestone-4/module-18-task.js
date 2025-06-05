// problem 1
const bill = 600;
if(bill > 500){
    console.log('Free Coke!');
} else{
    console.log('Pay 30 taka more for coke');
}

// bmi calc

//ternary op
let num1 = 20;
let num2 = 10;

let result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result);



// Ticket fare calc
let isStudent = false;
// isStudent = !isStudent;
let age = 25;
let fare = 800;

if(age < 10){
    console.log('Free for children!');
} else if(isStudent){
    let discount = fare * 50 / 100;
    fare = fare - discount;
    console.log('50% discount for students, pay : ' + fare);
} else if(age >= 60){
    let discount = fare * 15 / 100;
    fare = fare - discount;
    console.log('15% discount for seniors citizens, pay : ' + fare);
} else{
    console.log('Regular fare cost, pay : ' + fare);
}


// let res = 5 > '2';
// console.log(res);