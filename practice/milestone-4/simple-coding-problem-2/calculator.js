function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function mul(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}

function calculator(a, b, op){
    if(op === 'add'){
        const result = add(a, b);
        return result;
    } else if(op === 'sub'){
        return sub(a, b);
    } else if(op === 'mul'){
        return mul(a, b);
    } else if(op === 'div'){
        return div(a, b);
    } else{
        return 'only add | sub | mul | div is allowed!';
    }
}

const calc = calculator(8, 2, 'mul');
console.log(calc);