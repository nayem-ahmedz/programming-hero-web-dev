// Problem 1
function calculateTax(income, expenses) {
    if(income >= 0 && expenses >= 0 && income >= expenses){
        const save = income - expenses;
        const tax = save * 20 / 100;
        return tax;
    } else{
        return 'Invalid Input';
    }
    
}

// console.log(calculateTax(10000, 3000));

// Problem 2
function sendNotification(email){
    if(email.includes('@')){
        const parts = email.split('@');
        return parts[0] + ' sent you an email from ' + parts[1];
    }
    return 'Invalid Email';
}
const mail = 'zihad@gmail.com';
// console.log(sendNotification(mail));


// Problem 3
function checkDigitsInName(name){
    if(typeof name === 'string'){
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let hasDigits = false;
        for(const digit of digits){
            if(name.includes(digit)){
                hasDigits = true;
            }
        }
        return hasDigits ? true : false;
    }
    return 'Invalid Input';
}

// console.log(checkDigitsInName('Raj123'));
// console.log(checkDigitsInName(["Raj"]));



// Problem 4
function calculateFinalScore(obj){
    if(typeof obj === 'object'){
        let totalScore = obj.testScore + obj.schoolGrade;
        if(obj.isFFamily){
            totalScore += 20;
        }
        return totalScore >= 80 ? true : false;
    }
    return 'Invalid Input';
}
const object = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  };
// console.log(calculateFinalScore(object));


// Problem 5
function waitingTime(waitingTimes, serialNumber){
    if (Array.isArray(waitingTimes) && typeof serialNumber === 'number') {
        const vivaDone = waitingTimes.length;
        let vivaTimes = 0;
        for (const item of waitingTimes) {
            vivaTimes += item;
        }
        const avgVivaTime = Math.round(vivaTimes / vivaDone);
        const vivaRem = serialNumber - 1;
        const waitingTime = (vivaRem - vivaDone) * avgVivaTime;
        return waitingTime;
    }
    return 'Invalid Input';
}
// console.log(waitingTime([3, 5, 7, 11, 6], 10));