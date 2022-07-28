// 

shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed) > pontoonDistance / youSpeed ? "Alive!" : "Shark Bait!"
