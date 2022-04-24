// If name starts with r, then return name + " plays banjo"
// Else return name + " does not play banjo"

function areYouPlayingBanjo(name) {
    // Implement me
    if (name.toUpperCase().startsWith('R')) {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}