function avgOfOdd(arr){
    let sum = 0, totalOdd = 0;
    for(const num of arr){
        if(num %  2 === 1){
            sum += num;
            totalOdd++;
        }
    }
    return sum / totalOdd;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const avgOdd = avgOfOdd(numbers);
console.log(avgOdd);