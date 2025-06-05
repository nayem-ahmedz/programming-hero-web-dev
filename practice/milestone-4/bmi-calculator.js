let weight = 65;
let heightFoot = '5'; //in foot
let heightInch = '8'; //in inch

heightFoot = parseFloat(heightFoot);
heightInch = parseFloat(heightInch);
let heightInMeter = ((heightFoot * 12) + heightInch) * 0.0254; // 1 inch = 0.0254 meter
// console.log(heightInMeter);

const bmi = weight / (heightInMeter ** 2);

console.log('BMI : ' + bmi.toFixed(2));
let message = '';
if(bmi < 18.5){
    message = 'Youre underweight';
} else if(bmi >= 18.5 && bmi <= 24.9){
    message = 'Youre normal';
} else if(bmi >= 25 && bmi <= 29.9){
    message = 'Youre overweight';
} else{
    message = 'Youre obese';
}
console.log('Message : ' + message);