// finding the sum of multiples of n less than m
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n, m) {
    if (n <= 0 || m <= 0 || n >= m) {
        return "INVALID";
    }
    let sum = 0;
    for (let i = n; i < m; i++) {
        if (i % n === 0) {
            sum += i;
        }
    }
    return sum;
}