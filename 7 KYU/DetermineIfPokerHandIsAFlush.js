// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

function isFlush(cards) {
  return cards.every(x => x.slice(-1) === cards[0].slice(-1)); 
}