function pendulum(values) {
    let sortedArr = values.sort((a, b) => a - b)

    let pendulumArr = Array(values.length).fill(0)

    let smallest = sortedArr[0];
    let midIndex = Math.floor((values.length - 1) / 2)
    pendulumArr[midIndex] = smallest;

    let leftIndex = midIndex - 1
    let rightIndex = midIndex + 1
    for (let i = 1; i < values.length; i++ ){
        if (i % 2 == 1){
            pendulumArr[rightIndex] = sortedArr[i]
            rightIndex++
        } else {
            pendulumArr[leftIndex] = sortedArr[i]
            leftIndex--
        }
    }
    return pendulumArr
}