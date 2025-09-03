const myPromise = new Promise(function(resolve, reject){
    const value = 1;
    if(value === 0){
        resolve('Ok');
    } else{
        reject('Error');
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));