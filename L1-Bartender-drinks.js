// switch case 
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
// Make sure you cover the cases where certain words do not show up with correct capitalization.For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param) {
    let drink = "";
    switch (param.toLowerCase()) {
        case "jabroni":
            drink = "Patron Tequila";
            break;
        case "school counselor":
            drink = "Anything with Alcohol";
            break;
        case "programmer":
            drink = "Hipster Craft Beer";
            break;
        case "bike gang member":
            drink = "Moonshine";
            break;
        case "politician":
            drink = "Your tax dollars";
            break;
        case "rapper":
            drink = "Cristal";
            break;
        default:
            drink = "Beer";
    }
    return drink;
}