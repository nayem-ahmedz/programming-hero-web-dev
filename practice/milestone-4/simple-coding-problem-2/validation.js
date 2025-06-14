function add(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'Error : Pass a number!';
    }
    const total = a + b;
    return total;
}

let result = add(5, 7);
// console.log(result);

function getFullName(first, last){
    if(typeof first === 'string' && typeof last === 'string'){
        return first + ' ' + last;
    }
    return 'Error : Provide a valid name/string';
}

result = getFullName('Nayem', 'Ahmed');
// console.log(result);

function getPrice(obj){
    if(typeof obj === 'object'){
        return obj.price;
    }
    return 'Error : Provide a valid object';
}
result = getPrice({name: 'mobile', price: 1200});
result = getPrice(5);
// console.log(result);


function getLenght(arr){
    if(!Array.isArray(arr)){
        return 'Error : Provide a Array';
    }
    return arr.length;
}
// result = getLenght([1,2,3,4,5])
result = getLenght(1)
console.log(result);