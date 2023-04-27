function duplicates(arr) {
    let newArr = []
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
            if (map.get(arr[i]) === 2) {
                newArr.push(arr[i]);
            }
        } else {
            map.set(arr[i], 1);
        }
    }
    return newArr
}