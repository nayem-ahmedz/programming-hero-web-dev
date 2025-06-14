function getDiscountedPrice(quantity){
    let totalCost = 0;
    const first100P = 10, second100P = 8, avobe200P = 5;
    if(quantity <= 100){
        totalCost = quantity * first100P;
    } else if(quantity <= 200){
        totalCost = 100 * first100P;
        let remQuantity = quantity - 100;
        totalCost = totalCost + (remQuantity * second100P);
    } else{
        totalCost = 100 * first100P;
        totalCost = totalCost + (100 * second100P);
        let remQuantity = quantity - 200;
        totalCost = totalCost + (remQuantity * avobe200P);
    }
    return totalCost;
}

const bill = getDiscountedPrice(300);
console.log(bill);