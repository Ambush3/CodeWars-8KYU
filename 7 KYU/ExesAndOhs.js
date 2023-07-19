function XO(str) {
    const string = str.toLowerCase();
    const xCount = string.split('x').length - 1;
    const oCount = string.split('o').length - 1;

    return xCount === oCount;
}
