// Several system to add event in html elements
/*
    1. xxx < element onclick="console.log('clicked');" >

    2. *** < element onclick="callFunction()" >

    3. document.getElementById('red-bg').onclick = redBg;
        function redBg(){
            document.body.style.backgroundColor = 'red';
        }

      another way
        document.getElementById('pink-bg').onclick = function pinkBg(){ // function name can be ommited
            document.body.style.backgroundColor = 'pink';
        };

    4. const pinkBgBtn = document.getElementById('red-bg2');
        pinkBgBtn.addEventListener('click', redBg);

      another way
        pinkBgBtn.addEventListener('click', function nameNotNeeded(){
            document.body.style.backgroundColor = 'red';
        })

      ** another way / final way
        document.getElementById('red-bg2').addEventListener('click', function(){
            document.body.style.backgroundColor = 'red';
        }) 
*/

function blueBg() {
    document.body.style.backgroundColor = 'blue';
}
document.getElementById('red-bg').onclick = redBg;
function redBg() {
    document.body.style.backgroundColor = 'red';
}
document.getElementById('pink-bg').onclick = function pinkBg() {
    document.body.style.backgroundColor = 'pink';
};

const pinkBgBtn = document.getElementById('red-bg2');
// pinkBgBtn.addEventListener('click', redBg);
// pinkBgBtn.addEventListener('click', function nameNotNeeded(){
//     document.body.style.backgroundColor = 'red';
// })
document.getElementById('red-bg2').addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
})