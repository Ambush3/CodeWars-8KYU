function orderFood(list) {
    let obj = {};
    list.forEach(dev => {
        if (obj[dev.meal]) {
            obj[dev.meal]++;
        } else {
            obj[dev.meal] = 1;
        }
    });
    return obj;
}