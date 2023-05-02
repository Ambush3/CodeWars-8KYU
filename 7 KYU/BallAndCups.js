function cupAndBalls(b, arr){
    let ballPosition = b;
    for (let i = 0; i < arr.length; i++) {
        const switchCups = arr[i];
        if (switchCups.includes(ballPosition)) {
            ballPosition = switchCups[0] + switchCups[1] - ballPosition;
        }
    }
    return ballPosition
};

// faster optomization
function cupAndBalls(b, arr){
    let cupPositions = [1, 2, 3];
    for (let i = 0; i < arr.length; i++) {
        const switchCups = arr[i];
        const temp = cupPositions[switchCups[0]-1];
        cupPositions[switchCups[0]-1] = cupPositions[switchCups[1]-1];
        cupPositions[switchCups[1]-1] = temp;
    }
    return cupPositions.indexOf(b) + 1;
};
