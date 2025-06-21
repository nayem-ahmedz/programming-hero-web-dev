// count program

let count = 0;
const display = document.querySelector('#display');

function increment(){
    count++;
    display.innerText = count;
}

document.getElementById('decrement-btn').addEventListener('click', function(event){
    count--;
    display.innerText = count;
});