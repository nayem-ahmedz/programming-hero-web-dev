const cricketer = {
    name : 'Tamim Iqbal',
    age: 32,
    children: ['Ria Iqbal', 'Hia Iqbal', 'Rohim Iqbal'],
    property: {
        items: 2,
        value: 1200
    },
    sayHey: function(){
        console.log('Hello from', this.name)
    }
}

// console.log(cricketer.sayHey());
// cricketer.sayHey();
// console.log(cricketer.children[0]);
// console.log(cricketer.property.value);

const objAr = {
    '0': 56,
    1: 45,
    2: 67
};
// console.log(objAr['0']);

function sayHey(name){
    console.log(name);
    console.log(arguments);
    console.log(arguments[0]); // Arguments is Array like OBJECT
}

// sayHey('Nayem', 5, 6);


// finding matched products from a array of objects
const products = [
    {id: 1, name: 'Samsung A2 Phone', price: 1200},
    {id: 2, name: 'iPhone 7', price: 1500},
    {id: 3, name: 'Toshiba Laptop', price: 3000},
    {id: 4, name: 'Oppo Phone', price: 1200},
    {id: 5, name: 'Sony Phone 7', price: 1500},
    {id: 6, name: 'Dell Laptop', price: 3000}
];

function getMatchedResult(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
// let search = 'phone';
search = 'laptop';
const result = getMatchedResult(products, search);
console.log(result);