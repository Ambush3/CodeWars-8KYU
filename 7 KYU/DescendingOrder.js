function descendingOrder(n){
    let string = n.toString().split('');
    let sorted = string.sort((a, b) => b - a);
    return parseInt(sorted.join(''));
}