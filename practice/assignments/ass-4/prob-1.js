function totalFine(fare) {
    if(typeof fare === 'number' && fare > 0){
        const vat = fare * 0.2;
        const fine = fare + vat + 30;
        return fine;
    }
    return 'Invalid';
}

console.log(totalFine(-552));