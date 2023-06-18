function stray(numbers) {
    var s = new Set;

    numbers.forEach(v => s.delete(v) || s.add(v));

    return s.values().next().value;
}