function addToCart(){
    const productEl = document.getElementById('product');
    const quantityEl = document.getElementById('quantity');
    const product = productEl.value;
    const quantity = Number(quantityEl.value);
    storeInCart(product, quantity);
    productEl.value = '';
    quantityEl.value = '';
    displayCart(product, quantity);
}

const storeInCart = (product, quantity) => {
    const cart = getCart();
    if(cart[product]){
        cart[product] = cart[product] + quantity;
    } else{
        // cart.product = quantity;
        cart[product] = quantity;
    }
    localStorage.setItem('product', JSON.stringify(cart));
}

function getCart(){
    let cart = {};
    const json = localStorage.getItem('product');
    if(json){
        cart = JSON.parse(json);
    }
    return cart;
}

const ul = document.querySelector('#cart-items');
function displayCart(product, quantity){
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    ul.appendChild(li);
}

function storedCart(){
    const storedCart = localStorage.getItem('product');
    if(storedCart){
        const cart = getCart();
        for(const item in cart){
            // console.log(item, cart[item]);
            displayCart(item, cart[item]);
        }
    }
}
storedCart();