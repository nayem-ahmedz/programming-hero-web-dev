// console.log(5 > 2);
// console.log(5 < 2);
// console.log(5 == 2);
// console.log(5 != 2);

// console.log(5 >= 2);
// console.log(5 <= 2);

// console.log(5 == '5'); // true, only check value
// console.log(5 ==='5'); // false, because it check both value and type
// console.log(5 != '5'); // false
// console.log(5 !== '5') // true

const price = 4999;
if(price >= 5000){
    const discount = price * 10 / 100;
    const pay = price - discount;
    console.log('Pay taka ' + pay + ' after 10% discount (-' + discount + ')');
}else if(price >= 2500){
    const discount = price * 5 / 100;
    const pay = price - discount;
    console.log('Pay taka ' + pay + ' after 5% discount (-' + discount + ')');
} else{
    const pay = price;
    console.log('Pay taka ' + pay + ' after 0% discount');
}

// built BMI calculator

// *** Ternary Operator
const age = 17;

//age >= 18 ? console.log('You can marry!') : console.log('Youre a kid!');
(age >= 18) ? console.log('You can marry!') : console.log('Youre a kid!');

