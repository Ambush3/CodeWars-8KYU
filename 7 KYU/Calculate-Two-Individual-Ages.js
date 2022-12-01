function getAges(sum, difference) {
    let oldest = (sum + difference) / 2;
    let youngest = sum - oldest;
    return oldest >= 0 && youngest >= 0 && youngest <= oldest ? [oldest, youngest] : null;
};
