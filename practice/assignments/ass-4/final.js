function totalFine(fare) {
    if(typeof fare === 'number' && fare > 0){
        const vat = fare * 0.2;
        const fine = fare + vat + 30;
        return fine;
    }
    return 'Invalid';
}


function onlyCharacter(str) {
    if(typeof str === 'string'){
        let output = str.split(' ').join('');
        output = output.toUpperCase();
        return output;
    }
    return 'Invalid';
}


function bestTeam(player1, player2) {
    if(typeof player1 === 'object' && typeof player2 === 'object' && Array.isArray(player1) === false && Array.isArray(player2) === false){
        const team1Issue = player1.foul + player1.cardY + player1.cardR;
        const team2Issue = player2.foul + player2.cardY + player2.cardR;
        if(team1Issue > team2Issue){
            return player2.name;
        } else if(team1Issue < team2Issue){
            return player1.name;
        } else{
            return 'Tie';
        }
    } else{
        return 'Invalid';
    }
}


function isSame(arr1, arr2) {
    if(Array.isArray(arr1) && Array.isArray(arr2)){
        if(arr1.length === arr2.length){
            for(let i=0; i<arr1.length; i++){
                if(arr1[i] !== arr2[i]){
                    return false;
                }
            }
            return true;
        } else{
            return false;
        }
    }
    return 'Invalid';
}


function resultReport(marks) {
    if(!Array.isArray(marks)){
        return 'Invalid';
    }
    let scores = 0, pass = 0, fail = 0;
    if(marks.length >= 1){
        for(const mark of marks){
            scores += mark;
            mark >= 40 ? pass++ : fail++;
        }
        scores = scores / (pass + fail);
    }
    const report = {
        finalScore: Math.round(scores),
        pass: pass,
        fail: fail
    };
    return report;
}