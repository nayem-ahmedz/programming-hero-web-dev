const fruitTitle = document.getElementById('fruits-title');
// console.log(fruitTitle);
fruitTitle.innerText = 'My favourite fruits';

const favFruits = document.getElementsByClassName('fav-fruits');
// console.log(favFruits);
for(const fruit of favFruits){
    fruit.style.color = 'red';
}

console.log(document.getElementById('none')); // returned null
console.log(document.getElementsByClassName('non-fav-fruits'));
console.log(document.getElementsByClassName('non-fav')); // returned empty colection