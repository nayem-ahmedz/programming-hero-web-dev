function sum(a, b){
    const sum = a + b;
    return sum;
}
function add(a, b){
    return a + b;
}

const a = sum(5, 6);
const b = add(8, 9);

console.log(a, b);

function doMath(a, b){
    const sum = a + b;
    const diff = a - b;
    const mul = sum * diff;
    const div = mul / (a + b);
    return div;
}

const res = doMath(10, 5);
console.log(res);