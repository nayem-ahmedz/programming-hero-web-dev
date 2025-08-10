const today = Date();
const todayObj = new Date();
console.log(today, typeof today);
console.log(todayObj, typeof todayObj);

// console.log(todayObj.getDate());
// console.log(todayObj.getMonth()); 
// console.log(todayObj.getFullYear());

const now = Date.now();
console.log(now)
let i = 0;
while(i < 1000000){
    i++;
}
console.log(Date.now()) // use to find diffrence / run time 

