function diagonalSum(matrix) {
    const sum = matrix.reduce((total, row, index) => total + row[index], 0);
    return sum;
}