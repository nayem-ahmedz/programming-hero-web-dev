// for loop
for(let i=0; i<10; i++){
    // console.log(i);
}

//while loop
let i = 10;
while(i > 0){
    // console.log(i);
    i--;
}

// do while loop
let j = 0;
do{
    // console.log(j);
    j++;
}while(j < 10);


// break
for(let i=1; i<=20; i++){
    // console.log(i);
    if(i % 5 === 0){
        break;
    }
}

// continue
let k = 11;
while(k < 20){
    k++;
    if(k % 2 !== 0){
        continue;
    }
    console.log(k);
}