// convert a string into a number 
function toNumberArray(stringarray){
    let arr = []
    for (let i = 0; i < stringarray.length; i++){
        arr.push(Number(stringarray[i]))
    }
    return arr
}