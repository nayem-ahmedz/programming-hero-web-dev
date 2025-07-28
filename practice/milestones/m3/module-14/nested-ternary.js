const price = 1100;

const pay = price > 1000 ? price / 2 : price;
console.log(pay);
// pay > 600 ? console.log('5% Vat added') : console.log('2% Vat added')
pay < price ? (pay > 600 ? console.log('5% Vat added') : console.log('2% Vat added')) : console.log('Vat N/a');