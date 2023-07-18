function doubleEveryOther(a) {
    let result = []
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 1) {
            result.push((a[i] * 2))
        } else {
            result.push(a[i])
        }
    }
    return result
}