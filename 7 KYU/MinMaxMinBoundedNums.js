function minMinMax(array) {
    let hashMap = {};
    let min = array[0];
    let max = array[0];
    let minAbsent = array[0];
    for (let i = 0; i < array.length; i++) {
        hashMap[array[i]] = true;
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    for (let i = min + 1; i < max; i++) {
        if (!hashMap[i]) {
            minAbsent = i;
            break;
        }
    }

    return [min, minAbsent, max];
}