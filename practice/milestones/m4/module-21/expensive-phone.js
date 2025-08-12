function getExpensivePhone(phones){
    let expensive = phones[0];
    for(const phone of phones){
        if(phone.price > expensive.price){
            expensive = phone;
        }
    }
    return expensive;
}

const phones = [
  { model: "Samsung Galaxy S23", price: 899, camera: "50MP", color: "Silver" },
  { model: "Google Pixel 7", price: 799, camera: "50MP", color: "White" },
  { model: "OnePlus 11", price: 749, camera: "50MP", color: "Green" },
  { model: "iPhone 15", price: 999, camera: "48MP", color: "Black" },
  { model: "Xiaomi 13 Pro", price: 699, camera: "50MP", color: "Blue" }
];

const expensive = getExpensivePhone(phones);
console.log(expensive);