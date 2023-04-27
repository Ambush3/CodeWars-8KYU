function allNonConsecutive(arr) {
    let nonConsecutives = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] > 1) {
            nonConsecutives.push({ i: i, n: arr[i]});
        }
    }
    return nonConsecutives;
}