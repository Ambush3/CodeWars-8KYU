function getScore(arr) {
    let score = 0;
    let level = 0;
    let lines = 0;
    let levelMultiplier = 1;
    arr.forEach((line) => {
        if (line === 1) {
        score += 40 * levelMultiplier;
        } else if (line === 2) {
        score += 100 * levelMultiplier;
        } else if (line === 3) {
        score += 300 * levelMultiplier;
        } else if (line === 4) {
        score += 1200 * levelMultiplier;
        }
        lines += line;
        if (lines >= 10) {
        level++;
        levelMultiplier = level + 1;
        lines -= 10;
        }
    });
    return score;
}