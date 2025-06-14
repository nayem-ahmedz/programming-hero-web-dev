function getHighest(array){
    let highest = array[0];
    for(const element of array){
        if(element.price > highest.price){
            highest = element;
        }
    }
    return highest;
}

const phones = [
    {name: 'Samsung', model: 'SM-A002', price: 2000},
    {name: 'Oppo', model: 'SM-A003', price: 2100},
    {name: 'Redmi', model: 'RM-A002', price: 1700},
    {name: 'iPhone', model: 'IM-A003', price: 4000},
    {name: 'Walton', model: 'WM-A002', price: 1600}
];

console.log(getHighest(phones));