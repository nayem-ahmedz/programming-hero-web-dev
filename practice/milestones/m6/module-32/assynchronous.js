function print(value=0){
    console.log(value);
}
print('start...');
// setTimeout(print, 3000);
print('ending...');

// send a entire function
setTimeout(function(){
    // print('whole function called me!');
}, 4000);


// intervals, a callback functin to run on each interval
setInterval(print, 1000);