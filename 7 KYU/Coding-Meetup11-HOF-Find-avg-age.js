function getAverageAge(list) {
    let age = list.map(x => x.age)
    var sum = age.reduce((a, b) => a + b, 0)
    var avg = Math.round((sum / list.length) || 0)
    return avg
}