// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters.The tension between left side letters and right side letters was too high and the war began.
//     Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight.When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

function alphabetWar(fight) {
    let left = { w: 4, p: 3, b: 2, s: 1 };
    let right = { m: 4, q: 3, d: 2, z: 1 };
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < fight.length; i++) {
        if (left[fight[i]]) {
            leftSum += left[fight[i]];
        } else if (right[fight[i]]) {
            rightSum += right[fight[i]];
        }
    }
    if (leftSum > rightSum) {
        return "Left side wins!";
    } else if (leftSum < rightSum) {
        return "Right side wins!";
    } else {
        return "Let's fight again!";
    }
}