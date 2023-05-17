function createPhoneNumber(numbers){
    const firstThree = numbers.slice(0, 3).join('');
    const nextThree = numbers.slice(3, 6).join('');
    const lastFour = numbers.slice(6, 10).join('');

    return `(${firstThree}) ${nextThree}-${lastFour}`;
}