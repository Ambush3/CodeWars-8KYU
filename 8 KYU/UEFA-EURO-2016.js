// "At match Germany - Ukraine, Germany won!"
// "At match Belgium - Italy, Italy won!"
// "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores) {
    var result = "";
    var team1 = teams[0];
    var team2 = teams[1];
    var score1 = scores[0];
    var score2 = scores[1];
    if (score1 > score2) {
        result = "At match " + team1 + " - " + team2 + ", " + team1 + " won!";
    } else if (score1 < score2) {
        result = "At match " + team1 + " - " + team2 + ", " + team2 + " won!";
    } else {
        result = "At match " + team1 + " - " + team2 + ", teams played draw.";
    }
    return result;
}
