function arithmeticSequenceElements(a, d, n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(a + d * i)
    }
    let str = res.join(', ')
    return str
}
