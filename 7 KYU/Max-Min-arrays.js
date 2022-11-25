function solve(arr){
    let sorted = arr.sort((a,b) => a - b);
    let result = [];
    while(sorted.length > 0) {
        result.push(sorted.pop());
        result.push(sorted.shift());
    }
    return result.filter(x => x);
}