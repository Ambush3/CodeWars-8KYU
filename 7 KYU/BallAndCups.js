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