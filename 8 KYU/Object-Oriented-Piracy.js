class Ship {
    constructor (draft, crew) { // constructor function 
    this.draft = draft; // this.draft is a property of the Ship class 
    this.crew = crew; // this.crew is a property of the Ship class 
    }

    isWorthIt() { // isWorthIt is a method of the Ship class 
        return this.draft - 1.5 * this.crew > 20 // this.draft - 1.5 * this.crew is a calculation 
    }
}


