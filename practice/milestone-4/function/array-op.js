function sumOfNumbers(ar){
    if(Array.isArray(ar)){
        let sum = 0;
        for(const num of ar){
            sum += num;
        }
        return sum;
    } else{
        return 'Error : Pass an Array';
        // new Error('Send an Array')
    }
}

const array = [2, 5, 8, 9, 0];
const result = sumOfNumbers(array);

console.log(result);