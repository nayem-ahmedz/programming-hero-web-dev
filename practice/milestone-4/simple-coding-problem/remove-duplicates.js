function removeDupl(arr){
    const unique = [];
    for(const el of arr){
        if(!unique.includes(el)){
            unique.push(el);
        }
    }
    return unique;
}

const numbers = [1, 2, 1, 4, 5, 3, 2, 8, 9, 10];
const names = ['Nayem', 'Hajifa', 'Najifa', 'Nayem', 'Sayem', 'Hajifa'];

let unique = removeDupl(numbers);
console.log(unique);

unique = removeDupl(names);
console.log(unique);