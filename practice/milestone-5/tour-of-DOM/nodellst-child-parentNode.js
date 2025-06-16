const fruitSection = document.querySelector('.fruit-section');

// console.log(fruitSection.childNodes); 
// console.log(fruitSection.parentNode);
// console.log(fruitSection.childNodes[3].childNodes)
// console.log(fruitSection.childNodes[3].childNodes[1]);
// console.log(fruitSection.childNodes[3].childNodes[1].nextSibling);

const ul = fruitSection.childNodes[3];
// console.log(ul);

const li = document.createElement('li');
li.innerText = 'new js';
ul.appendChild(li);
