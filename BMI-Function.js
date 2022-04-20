function bmi(weight, height) {
    let bmi = weight / (height * height);
    switch (bmi) {
        case bmi < 18.5:
            return "Underweight";
            break;
        case bmi >= 18.5 && bmi <= 24.9:
            return "Normal";
            break;
        case bmi >= 25 && bmi <= 29.9:
            return "Overweight";
            break;
        case bmi >= 30:
            return "Obese";
            break;
    }
}