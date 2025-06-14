const url = 'https://github.com/ProgrammingHero1/js-problems-part2-practice-tasks';

// Task 1 : Find the lowest number in the array below
function getLowest(arr){
    let smallest = arr[0];
    for(const num of arr){
        if(num < smallest){
            smallest = num;
        }
    }
    return smallest;
}
const array = [167, 190, 120, 165, 137];
const smallest = getLowest(array);
console.log(smallest);


// Task 2 : Find the friend with the smallest name
function getSmallName(arr){
    let smName = arr[0];
    for(const item of arr){
        if(item.length < smName.length){
            smName = item;
        }
    }
    return smName;
}
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log('Smallest name :', getSmallName(friends));


// Task 3 
function calculateElectronicsBudget(laptops, tablets, mobiles){
    const laptopPrice = 35000, tabletPrice = 15000, mobilePrice = 20000;
    const total = laptopPrice * laptops + tabletPrice * tablets + mobilePrice * mobiles;
    return 'total money required : ' + total + ' taka';
}

const total = calculateElectronicsBudget(1, 1, 2);
console.log(total);


// Task 4
function findAveragePhonePrice(array){
    let totalPrice = 0;
    for(const item of array){
        totalPrice += item.price;
    }
    const avgPrice = totalPrice / array.length
    return parseFloat(avgPrice.toFixed(2));
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

console.log('Average price of Phone :', findAveragePhonePrice(phones));


// Task 5
function getTotalSalaries(employees){
    let totalSalaries = 0;
    for(const item of employees){
        const bonus = item.experience * item.increment;
        const total = item.starting + bonus;
        totalSalaries += total;
    }
    return totalSalaries;
}
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

console.log('Total Salaries company has to provide per month is :', getTotalSalaries(employees));