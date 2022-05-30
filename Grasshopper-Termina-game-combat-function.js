// create a function that takes an argument of health and returns the health after the damage

function combat(health, damage) {
    return health > damage ? health - damage : 0;
}