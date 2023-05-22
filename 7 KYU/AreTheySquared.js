var isSquare = function(arr){

    if(arr.length === 0) {
        return undefined;
    };

    for(let num of arr) {
        if(Math.sqrt(num) % 1 !== 0 ) {
            return false;
        }
    }
    return true;
}