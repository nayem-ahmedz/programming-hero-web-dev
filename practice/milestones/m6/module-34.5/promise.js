const newPromise = new Promise((resolve, reject) => {
    const num = Math.random() * 5;
    if(num >= 3){
        resolve('resolved ' + num);
    } else{
        reject('error, ' + num);
    }
});

newPromise
    .then(res => console.log('then ' + res))
    .catch(err => console.log('catch ' + err));