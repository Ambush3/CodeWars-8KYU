function rowWeights(array) {
    var team1 = 0;
    var team2 = 0;
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
        team1 += array[i];
        } else {
        team2 += array[i];
        }
    }
    return [team1, team2];
}