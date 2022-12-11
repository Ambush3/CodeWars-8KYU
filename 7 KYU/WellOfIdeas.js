function well(x) {
    let count = 0;
    x.map(function (element) {
        element.filter(function (array) {
            if (typeof array === "string") {
                if (array.toLowerCase() === "good") {
                    count++;
                }
            }
        })
    })
    if (count >= 1 && count <= 2) {
        return 'Publish!';
    } else if (count >= 3) {
        return 'I smell a series!';
    } else {
        return 'Fail!';
    }
}