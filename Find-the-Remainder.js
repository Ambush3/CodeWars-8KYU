// Write a function that takes two integers and return the remainder of dividing the larger value by the smaller value

function remainder(n, m) {
    if (n > m) {
        return n % m;
    } else {
        return m % n;
    }
}