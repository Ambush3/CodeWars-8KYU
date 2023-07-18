function makeLatinSquare(n) {
    let latinSquare = [];
    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = i; j <= n; j++) {
            row.push(j);
        }
        for (let j = 1; j < i; j++) {
            row.push(j);
        }
        latinSquare.push(row);
    }
    return latinSquare;
}