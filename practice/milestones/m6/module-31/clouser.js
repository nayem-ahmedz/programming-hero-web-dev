function counter(name){
    let count = 0;
    function increase(){
        count++;
        console.log(`counter of ${name} is set to ${count}`);
    }
    return increase;
}

const nayemsCounter = counter('nayem');
nayemsCounter();
nayemsCounter();
nayemsCounter();
const hajifasCounter = counter('hajifa');
hajifasCounter();
hajifasCounter();
nayemsCounter();
hajifasCounter();


// function counter(){
//     let count = 0;
//     return function(name){
//         count++;
//         console.log(`counter of ${name} is set to ${count}`);
//     }
// }

// const nayemsCounter = counter();
// nayemsCounter('nayem');
// nayemsCounter('nayem');
// nayemsCounter('nayem');
// const hajifasCounter = counter();
// hajifasCounter('hajifa');
// hajifasCounter('hajifa');
// nayemsCounter('nayem');
// hajifasCounter('hajifa');


/*
function counter(name){
    let count = 0;
    function increase(name){
        count++;
        console.log(`counter of ${name} is set to ${count}`);
    }
    return increase();
}

const nayemsCounter = counter('nayem');
nayemsCounter();
nayemsCounter();
nayemsCounter();
const hajifasCounter = counter('hajifa');
hajifasCounter();
hajifasCounter();
nayemsCounter();
hajifasCounter();
*/