function removeDupl(numbers){
    const unique = [];
    for(const numb of numbers){
        if(unique.includes(numb) !== true){
            unique.push(numb);
        }
    }
    return unique;
}

const array = [1, 5, 2, 1, 4, 3, 3, 6, 2, 5];
console.log(removeDupl(array));