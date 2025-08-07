const url = 'https://github.com/ProgrammingHero1/array-looping-tasks';

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// console.log(colors);

const revColors = [];
for(let i=colors.length-1; i>=0; i--){
    revColors.push(colors[i]);
}
console.log(revColors);