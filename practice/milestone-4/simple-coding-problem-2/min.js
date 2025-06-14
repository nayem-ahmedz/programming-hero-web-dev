function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const height = [54, 45, 56, 74, 65, 77, 44, 70, 41];

console.log('Minimum height is', getMin(height));