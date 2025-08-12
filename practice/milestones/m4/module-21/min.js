function getMin(array){
    let min = array[0];
    for(const el of array){
        if(el < min){
            min = el;
        }
    }
    return min;
}

const numbers = [10, 4, 2, 5, 7, 3, 8, 6];
console.log(getMin(numbers)); // git remote set-url origin git@github.com:username/repo.git
