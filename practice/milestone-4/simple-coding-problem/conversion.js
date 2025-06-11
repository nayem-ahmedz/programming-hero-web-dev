function inchToFeet(inch){
    const feet = parseInt(inch / 12);
    const remInch = inch % 12;
    const result = feet + ' feet ' + remInch + ' inch';
    return result;
}

const height = inchToFeet(75);
console.log(height);