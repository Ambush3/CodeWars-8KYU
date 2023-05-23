function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    let verticalSteps = 0;
    let horizontalSteps = 0;

    for (let i = 0; i < walk.length; i++){
        switch(walk[i]) {
            case 'n':
                verticalSteps++;
                break;
                case 's':
                    verticalSteps--;
                    break;
                    case 'w': 
                        horizontalSteps++;
                        break;
                        case 'e':
                            horizontalSteps--;
                            break;
        }
    }

    return verticalSteps === 0 && horizontalSteps === 0;
}
