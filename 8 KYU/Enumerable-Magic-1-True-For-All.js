function all (arr, fun) {
    for (let i = 0; i < arr.length; i++) { // for each element in the array
        if (!fun(arr[i])) { // if the function returns false
        return false; // return false
        }
    }
    return true; // otherwise return true
}