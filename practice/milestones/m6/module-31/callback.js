function print(a){
    console.log('print 1 : ' + a);
}
function print2(a){
    console.log(`print 2 : ${a}`);
}
function add(a, b, callback){
    const result = a + b;
    callback(result);
}

add(5, 7, print);
add(9, 1, print2);