// function params
function square(num){
    const square = num * num;
    console.log('Square of', num, 'is', square);
}

// pass arguments
square(8);
square(14);


function add(num1, num2, num3){
    const result = num1 + num2 + num3;
    console.log('Sum', result);
}

add(2, 5); // NaN because one is undefined, number + undefined = NaN
add(4, 20, 13);