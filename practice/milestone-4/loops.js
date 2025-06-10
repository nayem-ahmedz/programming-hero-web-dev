// // For of loop : used in Array
// const fruits = ['Apple', 'Mango', 'Banana', 'Jambura'];

// for(const fruit of fruits){
//     // fruit = fruit + '1'; not possible due to const, it create a const variale in each iteration
//     console.log(fruit);
// }
// // Tip : Always declare the loop variable explicitly with let or const to avoid global var


// // # for loop
// for(let i=0; i<fruits.length; i++){
//     console.log(i, ':', fruits[i]);
// }



// // # while loop
// let value = 0;
// while(value < 5){
//     console.log('while loop value : ', value);
//     value++;
// }

// let num = 1;
// while(num <= 10){
//     if(num % 2 !== 0){
//         console.log(num);
//     }
//     num++;
// }


// // Decremental For and while loop
// // console.log('Decremental For');
// // for(let num = 10; num >= 0; num--){
// //     console.log(num);
// // }

// // console.log('Decremental while');
// // let i = 10;
// // while(i != 0){ // i >= 0
// //     console.log(i);
// //     i--;
// // }

// // number divisable by 3 and 5 (from 1 to 50)
// let sum = 0;
// let count = 0;
// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         let prevSum = sum;
//         sum += i;
//         console.log('num :', i, 'sum =', prevSum, '+', i, '=', sum);
//         count++;
//     }
// }
// console.log('Count :', count, 'Sum of Numbers :', sum);


// // Break : it will break the iteration
// for(let i = 0; i < 50; i++){
//     if(i === 3){
//         break;
//     }
//     console.log(i);
// }

// // Continue : it will skip current iteration
// let num = 30;
// while(num >= 25){
//     if(num === 27){
//         num--;
//         continue;
//     }
//     console.log(num);
//     num--;
// }

// let num = 1;
// while(num <= 50){
//     if(num % 5 !== 0){
//         num++;
//         continue;
//     }
//     console.log(num);
//     num++;
// }
// // using for loop
// for(i = 1; i <= 50; i++){
//     if(i % 5 !== 0){
//         continue;
//     }
//     console.log(i);
// }

let x = 10;
do{
    console.log(x);
    x++;
} while(x < 5); // work is done, then check the condition

