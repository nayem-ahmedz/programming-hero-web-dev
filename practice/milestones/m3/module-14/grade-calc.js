let marks = 79;

if(marks > 100 || marks < 0){
    console.log('Invalid Marks!');
}
else if(marks >= 80){
    console.log('A+');
} else if(marks >= 70){
    console.log('A');
} else if(marks >= 60){
    console.log('A-');
} else if(marks >= 50){
    console.log('B');
} else if(marks >= 40){
    console.log('C');
} else{
    console.log('Failed!');
}