class Hierarchy {
    constructor(name) {
        this.name = name;
        /** @type {Hierarchy[]} */
        this.underlings = [];
        /** @type {Hierarchy} */
        this.superior = null;
    }
    /**
     * @param {Hierarchy} underling 
     * @returns {Hierarchy}
     */
    addUnderling(underling) {
        this.underlings.push(underling);
        underling.setSuperior(this);
        return this;
    }
    /**
     * @param {Hierarchy} superior 
     * @returns {Hierarchy}
     */
    setSuperior(superior) {
        this.superior = superior;
        return this;
    }
    amIOverlord() {
        return this.superior===null;
    }
    amIPrivate() {
        return this.underlings.length===0;
    }
    passMessageUp(message) {
        if (this.amIOverlord()) {
            console.log(this.name,'hey, a message!',message);
        } else {
            console.log(this.name,'i am just passing a message to my superior');
            this.superior.passMessageUp(message);
        }
    }
    passCommandDown(command) {
        if (this.amIPrivate()) {
            console.log(this.name,'SIR YES SIR!',command);
        } else {
            this.underlings.forEach(function(underling) {
                console.log(this.name,'passing down command:',command);
                underling.passCommandDown(command);
            }.bind(this));
        }
    }
    static createSoldier(name,superior) {
        let x = new Hierarchy(name);
        x.setSuperior(superior);
        superior.addUnderling(x);
        return x;
    }
}

let general = new Hierarchy('Honcho');
let fieldmarshal = new Hierarchy('Bartholomew');
fieldmarshal.addUnderling(general);

let alice = Hierarchy.createSoldier('Alice',general);
let bob = Hierarchy.createSoldier('Bob',general);
let connor = Hierarchy.createSoldier('Connor',general);
let david = Hierarchy.createSoldier('David',general);



fieldmarshal.passCommandDown("attack!");
alice.passMessageUp('we are attacking!');

/*
console.log('fieldmarshal sees: ',fieldmarshal);
console.log('general sees:',general);
*/