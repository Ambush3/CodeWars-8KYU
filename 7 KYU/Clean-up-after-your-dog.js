function crap(x, bags, cap){
    let poop = 0;
    for (let i = 0; i < x.length; i++) { // For each row in x
        for (let j = 0; j < x[i].length; j++) { // For each column in x
            if (x[i][j] === '@') { // If there is poop
                poop += 1; // Count the poop
            }
            if (x[i][j] === 'D') { // If there is a dog
                return "Dog!!" // Return Dog!!
            }
        }
        
    }
    if (poop > bags * cap) { // If there is more poop than bags can hold
        return "Cr@p"; // Return Cr@p
    } else {
        return "Clean"; // Return Clean
    }
}