// get attribute (attName)
const domId = document.getElementById('dom-title');
console.log(domId.getAttribute('id'));

console.log(domId.getAttribute('class')); // get classname
console.log(domId.classList); // better option to get class names, array like obj

domId.classList.remove('color-white');
console.log(domId.classList);

domId.classList.add('new-class-by-js');
console.log(domId.classList);
console.log(domId.getAttribute('class'));


// set attribute (attName, value)
domId.setAttribute('style', 'color: green;');
domId.setAttribute('title', 'title by js');

