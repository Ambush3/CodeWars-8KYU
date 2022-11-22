function countWins(winnerList, country) {
    let count = 0;
    for (let i = 0; i < winnerList.length; i++) {
        if (winnerList[i].country === country) {
            count++;
        }
    }
    return count;
}