const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    let distanceLeft = (mpg * fuelLeft);
    return distanceLeft >= distanceToPump
};

// pump is 50 miles away
// avg mpg is 25mpg
// 2 gallons left