// duck duck goose
// given an array of player objects 
// return the name of the chosen player
// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

function duckDuckGoose(players, goose) {
    return players[(goose - 1) % players.length].name;
}