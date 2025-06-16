// adding a entire section
const mainCont = document.getElementById('main-container');

// console.log(mainCont);

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Progamming language list';
section.appendChild(h1);

// create a ul and its li
const ul = document.createElement('ul');
const list = ['c', 'js', 'c++', 'java'];
for(const item of list){
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
section.appendChild(ul);

// add/append to main container
mainCont.appendChild(section);






// shortcut to add content usig innerHTML
const content = `
    <h1>js features</h1>
    <ul>
      <li>list 1</li>
      <li>list 2</li>
      <li>list 3</li>
    </ul>
`;
const section2 = document.createElement('section');
section2.innerHTML = content;
mainCont.appendChild(section2);
