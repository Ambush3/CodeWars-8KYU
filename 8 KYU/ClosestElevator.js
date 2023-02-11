function elevator(left, right, call) {
    var leftDist = Math.abs(left - call);
    var rightDist = Math.abs(right - call);
    if (leftDist < rightDist) {
        return "left";
    } else if (leftDist > rightDist) {
        return "right";
    } else {
        return "right";
    }
}