function dropWhile(arr, pred) {
    while (arr.length && pred(arr[0])) arr.shift()
    return arr
}