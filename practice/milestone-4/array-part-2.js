// # Traversing a array

// using for loop
const frineds = ['Ahmed', 'Nayem', 'Hajifa'];
for(let i=0; i<frineds.length; i++){
    // console.log(frineds[i]);
}

for(const frined of frineds){
    // console.log(frined);
}


// using while loop
let j = 0;
while(j < frineds.length){
    // console.log(frineds[j]);
    j++;
}




// # Reverse a array without reverse method
friends = frineds.reverse();
// console.log(frineds)

const nums = [1, 2, 3, 5, 6, 7];
const revNums = [];
for(let i=0; i<nums.length; i++){
    revNums.unshift(nums[i]);
}
// console.log(revNums);

const revNums2 = [];
for(const num of nums){
    revNums2.unshift(num);
}
// console.log(revNums2);


const revLoop = [];
for(let i=nums.length-1; i>=0; i--){
    // console.log(nums[i]);
    revLoop.push(nums[i]);
}
// console.log(revLoop);



// # Javascript sort : has some issues
const values = [1, 2, 3, 5, 8, 2, 1];
// console.log(values.sort());

const values2 = [1, 22, 3, 5, 82, 2, 10];
// console.log(values2.sort()); // sorting like a string

// proper method
// console.log(values2.sort((a, b) => a - b)); // using arrow function
// console.log(values2.sort(function(a, b) {return b -a})); // descending order sort
const v2 = [...values2].sort(function(a, b) {return a - b}); // this will not change orignal array
// console.log(values2);
// console.log(v2);


// from my experience, learnt this in 1st/2nd year, probably called bubble sort
const myNums = [2, 1, 4, 6, 3, 8, 12, 10, 15];
for(let i=0; i<myNums.length; i++){
    for(let j=0; j<myNums.length; j++){
        if(myNums[i] < myNums[j]){
            let temp = myNums[i];
            myNums[i] = myNums[j];
            myNums[j] = temp;
        }
    }
}

// console.log(myNums);