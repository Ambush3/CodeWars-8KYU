function ballTest(s, r) { 
    let cracks = [...r.slice(0, s)].filter(element => element == 'x').length
    if (s <= 0) {
        return false
    } 
    if (s >= r.length) {
        return true
    } else {
        return ballTest(s - 1 - cracks, r.slice(s))
    }
}