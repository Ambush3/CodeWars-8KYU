function flyBy(lamps, drone) {
    let lampsArray = lamps.split(''); // split the string into an array of characters
    let droneArray = drone.split('');
    let i = 0;
    while (i < droneArray.length) { // while the drone is still flying
        if (lampsArray[i] === 'x') { // if the lamp is broken
            lampsArray[i] = 'o'; // turn the lamp on
        }
        i++;
    }
    return lampsArray.join(''); // join the array of characters into a string
}