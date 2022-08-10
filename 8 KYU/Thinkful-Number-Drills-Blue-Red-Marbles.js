// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:
//
// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
// the number of red marbles pulled out so far (always lower than the starting number of red marbles)
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    var blue = blueStart - bluePulled; // number of blue marbles left in the bag
    var red = redStart - redPulled; // number of red marbles left in the bag
    var total = blue + red; // total number of marbles in the bag
    var blueProb = blue / total; // probability of drawing a blue marble
    return blueProb; // return the probability of drawing a blue marble
}