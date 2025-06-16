const section = document.querySelectorAll('section');
console.log(section)

for(const sec of section){
    sec.style.backgroundColor = 'gray';
    sec.style.marginBottom = '15px';
    sec.style.color = 'white';
    sec.style.padding = '10px';
}

const fruitSection = document.querySelector('.fruit-section');
fruitSection.classList.add('bg-red');

setTimeout(() => {
    fruitSection.classList.remove('bg-red');
}, 2000);