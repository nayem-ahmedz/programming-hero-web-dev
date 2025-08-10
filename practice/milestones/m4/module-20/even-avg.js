function getAvgEvens(numbers){
    sum = count = 0;
    for(const numb of numbers){
        if(numb % 2 === 0){
            sum += numb;
            count++;
            // console.log(sum, count)
        }
    }
    return sum / count;
}

const array = [2, 1, 5, 4, 6, 7, 9, 8];
const output = getAvgEvens(array);
console.log(output);