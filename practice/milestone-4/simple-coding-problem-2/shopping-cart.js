function getTotatCost(cart){
    let total = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
    }
    return total;
}

const cart = [
    {name: 'Shirt', price: 500, quantity: 2},
    {name: 'Pant', price: 700, quantity: 2},
    {name: 'Panjabi', price: 1500, quantity: 1},
    {name: 'T-shirt', price: 350, quantity: 2},
    {name: 'Shoes', price: 1200, quantity: 1}
];
// cart.push({name: 'Trouser', price: 500, quantity: 2});

const totalBill = getTotatCost(cart);
console.log('Total Bill :', totalBill);