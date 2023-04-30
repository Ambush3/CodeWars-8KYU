function listToArray(list) {
    const values = [];
    let current = list;
    while (current !== null){
        values.push(current.value);
        current = current.next
    }

    return values
}