// If possible, divide the integers 1, 2,…,n into two sets of equal sum.

function createTwoSetsOfEqualSum(n) {
    let sum = n * (n + 1) / 2;
    if (sum % 2 !== 0) return [];
    let set1 = [];
    let set2 = [];
    let target = sum / 2;
    for (let i = n; i > 0; i--) {
        if (target - i >= 0) {
            set1.push(i);
            target -= i;
        } else {
            set2.push(i);
        }
    }
    return [set1, set2];

}

