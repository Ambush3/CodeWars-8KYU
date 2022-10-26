function myLanguages(results){
    let arr = []
    for (let key in results) {
        if (results[key] >= 60) {
        arr.push(key)
        }
    }
    return arr.sort((a, b) => results[b] - results[a])
}