function pow(number, power) {
    var p = 1;
    for (var i=0; i<power; i++) {
        p *= number;
    }
    return p
}