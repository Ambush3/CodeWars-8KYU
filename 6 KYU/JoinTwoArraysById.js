function joinArraysById(arr1, arr2) {
    var hash = Object.create(null);
    arr1.concat(arr2).forEach(function (obj) {
        hash[obj.id] = Object.assign(hash[obj.id] || {}, obj);
    });
    var a3 = Object.keys(hash).map(function (key) {
        return hash[key];
    });
    return a3
}