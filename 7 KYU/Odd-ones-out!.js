function oddOnesOut(nums) {
    let array = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count % 2 === 0) {
            array.push(nums[i]);
        }
        count = 0;
    }
    return array
}