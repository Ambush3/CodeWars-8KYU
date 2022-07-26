// age range compatibility:
// min - age - 0.10 * age
// max - age + 0.10 * age
// Math.floor so that an integer is given instead of a float

function datingRange(age) {
    let over14 = `${Math.floor((age / 2) + 7)} - ${Math.floor((age - 7) *2) }`;
    let under14 = `${Math.floor(Math.abs((age * .10 ) - age))} - ${Math.floor((age * .10) + age)}`;

    return (age<= 14 ? under14 : over14);   
}