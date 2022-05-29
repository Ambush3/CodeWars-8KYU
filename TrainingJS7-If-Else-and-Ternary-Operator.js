// n < 5  = 100
// n >= 5 and n < 10 = 95
// n >= 10 = 90
// ternary operator

function saleHotdogs(n) {
    return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90
}