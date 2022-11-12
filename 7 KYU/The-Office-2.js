function boredom(staff) {
    d = { 'accounts': 1, 'finance': 2, 'canteen': 10, 'regulation': 3, 'trading': 6, 'change': 6, 'IS': 8, 'retail': 5, 'cleaning': 4, 'pissing about': 25 }
    return Object.values(staff).reduce((a, b) => a + d[b], 0) > 100 ? 'party time!!' : Object.values(staff).reduce((a, b) => a + d[b], 0) > 80 ? 'i can handle this' : 'kill me now'
}