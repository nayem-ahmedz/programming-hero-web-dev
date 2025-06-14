function getDiscountedPrice(quantity){
    let total = 0;
    if(quantity <= 100){
        total = quantity * 10;
    } else if(quantity <= 200){
        total = quantity * 8;
    } else{
        total = quantity * 5;
    }
    return total;
}

const q = 201;
const bill = getDiscountedPrice(q);
console.log(bill);