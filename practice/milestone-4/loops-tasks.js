// // *** for loop ***
// // Problem 1 
// let num = 1;
// while(num <= 10){
//     console.log('I will invest at least 6 hrs every single day for next 60 days!,', num);
//     num++;
// }

// // Problem 2
// for(let i = 61; i <= 100; i++){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }

// for(let i = 78; i <= 98; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// // Problem 3
// let oddSum = 0;
// for(let i = 91; i <= 129; i+=2){
//     oddSum += i;
// }
// console.log('Odd Sum :', oddSum);
// let evenSum = 0;
// for(let i = 51; i <= 85; i++){
//     if(i % 2 === 0){
//         evenSum += i;
//     }
// }
// console.log('Even Sum :', evenSum);


// // Problem 4
// for(let i = 1; i <= 10; i++){
//     console.log(`9 x ${i} = ${9*i}`);
// }

// // Problem 5
// for(let i = 81; i >= 65; i--){
//     console.log(i);
// }


// // *** for loop ***
// // Problem 1
// let l = 0;
// while(l <= 10){
//     console.log('I will invest at least 6 hrs every single day for next 60 days!', l);
//     l++;
// }

// // Problem 2
// let a = 61;
// while(a <= 100){
//     if(a % 2 === 1){
//         console.log(a);
//     }
//     a++;
// }
// a = 78;
// while(a <= 98){
//     if(a % 2 === 0){
//         console.log(a);
//     }
//     a++;
// }

// // Problem 3
// let sum = 0;
// let a = 81;
// while(a <= 131){
//     if(a % 2 === 1){
//         sum += a;
//     }
//     a++;
// }
// console.log('Odd Sum :', sum);

// a = 206, sum = 0;
// while(a <= 311){
//     if(a % 2 === 0){
//         sum += a;
//     }
//     a++;
// }
// console.log('Even Sum :', sum);

// // Problem 4
// let number = 5;
// let i = 1;
// while(i <= 10){
//     console.log(`${number} x ${i} = ${number * i}`);
//     i++;
// }

// // Problem 5 : Implement a countdown timer that counts down from 21 to 15.
// let a = 21;
// while(a >= 15){
//     console.log(a);
//     a--;
// }


// // *** Break ***
// // Problem 1 : Write a loop 1 to 200. Use break to exit the loop once you find 100
// let start = 1;
// while(start <= 200){
//     if(start === 100){
//         console.log('found ', start, 'and exit now');
//     }
//     start++;
// }

// // Problem 2 : Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
// let sum = 0, i = 1;
// while(true){
//     sum += i;
//     i++;
//     if(sum >= 100){
//         console.log(i, sum);
//         break;
//     }
// }

// // another approch
// let sum = 0, i = 1;
// while(sum <= 100){
//     sum += i;
//     i++;
// }
// console.log(i, sum);

// -------------------- Remaining --------------------
// // Problem 3 : Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
// for(let i = 1; i <= 100; i++){
//     if(i === i*i)
// }








// // *** Continue ***
// // Problem 1 : Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers
// for(let i = 1; i <= 40; i++){
//     if(i % 2 === 1)
//         continue;
//     console.log(i);
// }

// Problem 2 : display odd number from 55 to 85 and skip the numbers divisible by 5
for(let i = 55; i <= 85; i+=2){
    if(i % 5 === 0) continue;
    console.log(i);
}