// given a matrix n x n(2 - 7), determine if the arrow is directed to the target(x).
// There will be only 1 arrow '>' and 1 target 'x'
// An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">" 


// example:
// [
//   [" ", " ", " "],
//   [" ", ">", " "],
//   [" ", " ", "x"]
// ] => false

// [
//   [" ", " ", " "],
//   [" ", " ", " "],
//   [" ", ">", "x"]
// ] => true


const solution = mtrx => {
    let target = [];
    let arrow = [];
    for (let i = 0; i < mtrx.length; i++) {
        for (let j = 0; j < mtrx[i].length; j++) {
        if (mtrx[i][j] === "x") {
            target.push(i, j);
        } else if (mtrx[i][j] === ">") {
            arrow.push(i, j);
        }
        }
    }
    if (target[0] === arrow[0] && target[1] > arrow[1]) {
        return true;
    } else {
        return false;
    }
}