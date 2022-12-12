function findWaldo(crowd) {
    let array = [],
        waldo = ''
    for (let i = 0; i < crowd.length; i++) {
        for (let j = 0; j < crowd[i].length; j++) {            
            array.push(crowd[i][j])
        }
    }
    array.sort();
    for (let i = 1; i < array.length -1; i++) {
        if (array[i] != array[i - 1] && array[i] != array[i + 1]){
            waldo = array[i]
        }
    }
    for (let i = 0; i < crowd.length; i++) {
        for (let j = 0; j < crowd[i].length; j++) {
            if (crowd[i][j] === waldo) {
                return [i, j]
            }
        }
    }
}