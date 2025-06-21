let reviewSerial = 0;
document.getElementById('submit-review-btn').addEventListener('click', function(){
    reviewSerial++;
    const inputField = document.querySelector('#input-field');
    const review = inputField.value.trim();
    if(review === '') return;
    const p = document.createElement('p');
    p.classList.add('my-3');
    p.innerText = reviewSerial + ' . ' + review;
    document.querySelector('.review-container').appendChild(p);

    inputField.value = '';
});