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

const array1 = [1,'2',3];
const array2 = [1,2,3];
console.log(isSame(array1, array2));