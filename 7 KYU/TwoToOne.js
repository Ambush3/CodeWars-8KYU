function longest(s1, s2) {
    let newString = s1.concat(s2);

    const uniqueChars = [...new Set(newString)];

    const sortedString = uniqueChars.sort().join('');

    return sortedString;
}