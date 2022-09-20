function stantonMeasure(arr) {
    let n = arr.filter(el => el === 1);
    let sum = n.reduce((acc, crr) => acc + crr, 0)
    let fil = arr.filter(el => el === sum)
    return fil.length
}