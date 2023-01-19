function findDup(arr) {
    let hashmap = {};
    for (let i = 0; i < arr.length; i++) {
        if (hashmap[arr[i]]) {
            return arr[i]
        } else {
            hashmap[arr[i]] = true
        }
    }
    return null
}