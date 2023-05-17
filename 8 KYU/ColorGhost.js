class Ghost {
    constructor() {
        this.colors = ["white", "yellow", "purple", "red"];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }
}

const ghost = new Ghost();
console.log(ghost.color);  // Output: "white" or "yellow" or "purple" or "red"
