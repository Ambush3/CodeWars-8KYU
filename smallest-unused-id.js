nextId = (ids) => {
    let lowestNextId = 0 // lowest next id found so far (initially 0) 
    let sortedIds = ids.sort((a, b) => a - b); // sort ids in ascending order 
    for (let i = 0; i < sortedIds.length; i++) {   // iterate through sorted ids 
        if (lowestNextId === sortedIds[i] && lowestNextId !== sortedIds[i + 1]) { // if id is the lowest next id 
            lowestNextId++ // increment lowest next id 
        }
        else if (lowestNextId !== sortedIds[i + 1]) { // if id is not the lowest next id 
            return lowestNextId; // return lowest next id 
        }
    }
    return lowestNextId
}