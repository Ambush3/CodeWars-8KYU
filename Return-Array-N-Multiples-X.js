// Create a function with two arguments that will return an array of the first (n) multiples of (x).
function countBy(x, n) {
    let arr = [];
    for (let i = 1; i <= n; ++i)
        arr.push(x * i);
    return arr;
}
