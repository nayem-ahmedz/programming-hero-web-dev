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

const marks = [99];
console.log(resultReport(marks));