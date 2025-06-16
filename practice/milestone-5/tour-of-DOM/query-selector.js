const fruitTitle = document.querySelector('#fruits-title');
// console.log(fruitTitle);
fruitTitle.innerText = 'My favourite fruits';

const favFruits = document.querySelectorAll('.fav-fruits');
// console.log(favFruits);
for(const fruit of favFruits){
    fruit.style.color = 'red';
}

const firstFavFruit = document.querySelector('.fav-fruits');
console.log(firstFavFruit);

const fruit1 = document.getElementById('fruit-1');
console.log(fruit1) // similliar