function getMatchedProducts(products, search){
    const matchedProduct = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matchedProduct.push(product);
        }
    }
    return matchedProduct;
}

const products = [
    { name: "iPhone 12 Phone", price: 95000, releaseYear: 2020 },
    { name: "Samsung Galaxy S21 Phone", price: 75000, releaseYear: 2021 },
    { name: "Google Pixel 6 Phone", price: 65000, releaseYear: 2021 },
    { name: "OnePlus 9 Pro Phone", price: 70000, releaseYear: 2021 },
    { name: "Xiaomi Mi 11 Phone", price: 55000, releaseYear: 2021 },
    { name: "MacBook Air Laptop", price: 120000, releaseYear: 2020 },
    { name: "MacBook Pro Laptop", price: 180000, releaseYear: 2021 },
    { name: "Dell XPS 13 Laptop", price: 135000, releaseYear: 2021 },
    { name: "Toshiba Longitude 12 Laptop", price: 135000, releaseYear: 2020 },
    { name: "HP Spectre x360 Laptop", price: 140000, releaseYear: 2021 },
    { name: "Lenovo ThinkPad X1 Laptop", price: 130000, releaseYear: 2021 }
];

// console.log(products);
const result = getMatchedProducts(products, 'Phone');
console.log(result);