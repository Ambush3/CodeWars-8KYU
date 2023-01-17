function largest(n, xs) {
    let order = xs.sort((a, b) => b - a)
    return order.slice(0, n).sort((a, b) => a - b)
}

// in a better algorithm
function largest(n, xs) {
    return xs.sort((a, b) => b - a).slice(0, n).sort((a, b) => a - b)
}