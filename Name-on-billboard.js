billboard = (name, price = 30) => [...new Array(name.length)].fill(price).reduce((prev, curr) => prev + curr);

// return how much itll cost to print out name
// example - each letter is $30
// for every letter in name add 30 to the total
