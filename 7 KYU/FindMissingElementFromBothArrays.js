const findMissing = (arr1, arr2) => {
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] != arr2[i]) return arr1[i];
    }
}

// using hashmap would be better if arrays were larger 
function findMissing(arr1, arr2) {
    let countMap = new Map();

    for (let i = 0; i < arr1.length; i++) {
        let count = countMap.get(arr1[i]) || 0;
        countMap.set(arr1[i], count + 1);

        count = countMap.get(arr2[i]) || 0;
        countMap.set(arr2[i], count - 1);
    }

    for (let [key, value] of countMap.entries()) {
        if (value % 2 !== 0) {
            return key;
        }
    }

    return null;
}
