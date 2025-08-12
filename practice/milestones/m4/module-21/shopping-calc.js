function getPrice(shirt, pant, shoe){
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const total = shirtPrice * shirt + pantPrice * pant + shoePrice * shoe;
    return total;
}

const totalPay = getPrice(1, 0, 1);
console.log(totalPay);