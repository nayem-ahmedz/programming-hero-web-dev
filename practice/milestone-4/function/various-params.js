function isEvenSized(str){
    const length = str.length;
    // console.log(str, length);
    // return length % 2 === 0 ? true : false;
    if(length % 2 === 0){
        return true;
    }
    return false;
}

const v = isEvenSized('nayem');
console.log(v);

const v2 = isEvenSized('sylhet');
console.log(v2);

