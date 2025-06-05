let price = 500;
const isBoss = false;

// if(isBoss === true){
//     price = 0;
// } else{
//     price = price + 100;
// }
// console.log(price);

// price = isBoss === true ? 0 : price + 100;
price = isBoss ? 0 : price + 100;
console.log(price);


// nested ternary op
const isLeader = true;
let cost = 12;
// pay = isLeader === true ? cost > 10 ? cost / 2 : 0 : cost * 2;
pay = isLeader === true ? (cost > 10 ? cost / 2 : 0) : cost * 2;
console.log(pay);

// logical not !
// !! two not will flip the logical not

let open = true;
console.log(!open);
console.log(!!open);


// double !! can be used to check if any value is exist for a variable
let userID = 10;
// console.log(userID); // 10
// console.log(!userID); // false
// console.log(!!userID); // true