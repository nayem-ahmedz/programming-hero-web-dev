function onlyCharacter(str) {
    if(typeof str === 'string'){
        let output = str.split(' ').join('');
        output = output.toUpperCase();
        return output;
    }
    return 'Invalid';
}

// const string = '  h e llo wor   ld';
// const string = 'Cy   bar- At  tac k  ';
const string = ' ha ck m e 1 @ru.c  n  ';
// const string = 'Serv er : : Do wn';
// const string = ["hack", "me"];
// const string = true;

console.log(onlyCharacter(string));