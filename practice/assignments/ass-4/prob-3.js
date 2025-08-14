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

const
    team1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    team2 = 'st';
console.log(bestTeam(team1, team2));