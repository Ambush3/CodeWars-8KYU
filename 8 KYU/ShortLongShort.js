function solution(a, b) {
    let newArry = [];
    if (a.length > b.length) {
        newArry.unshift(b)
        newArry.push(a)
        newArry.push(b)
    } else {
        newArry.unshift(a)
        newArry.push(b)
        newArry.push(a)
    }
    return newArry.toString().replace(/,/g, "");
}


