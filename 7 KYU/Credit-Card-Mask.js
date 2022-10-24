function maskify(cc) {
    for (let i = 0; i < cc.length; i++) {
        return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
    }
}