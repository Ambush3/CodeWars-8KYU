// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    return [...s].map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i)).join('-');
}