class Hierarchy {
    constructor(name) {
        /** @type {String} */
        this.name = name;
        /** @type {Hierarchy[]} */
        this.underlings = [];
        /** @type {Hierarchy} */
        this._superior = null;
        if (typeof Hierarchy.topDogs==='undefined') {
            Hierarchy.topDogs = [this];
        }
        this.superior = null;
    }
    get superior() {
        return this._superior;
    }
    /**
     * @param {Hierarchy} newV
     */
    set superior(newV) {
        if (newV===null) {
            if (Hierarchy.topDogs.indexOf(this)===-1) {
                Hierarchy.topDogs.push(this);
            }
        } else {
            Hierarchy.topDogs = Hierarchy.topDogs.filter((item) => {
                return item!==this;
            });
        }
        this._superior = newV;
    }
    /**
     * @param {Hierarchy} underling 
     * @returns {Hierarchy}
     */
    addUnderling(underling) {
        underling.unbind();
        this.underlings.push(underling);
        underling.superior = this;
        return this;
    }
    /**
     * @param {Hierarchy} superior 
     * @returns {Hierarchy}
     */
    bind(superior) {
        if (superior!==null) {
            superior.addUnderling(this);
        } else {
            this.unbind();
        }
        return this;
    }
    /**
     * @param {Hierarchy} underling 
     * @returns {Hierarchy}
     */
    removeUnderling(underling) {
        //this.underlings.filter(item => underling!==item);
        this.underlings = this.underlings.filter(function(item) {
            return underling!==item;
        });
        underling.superior = null;
        return this;
    }
    /**
     * @returns {Hierarchy}
     */
    unbind() {
        if (this.superior!==null) {
            this.superior.removeUnderling(this);
        }
        return this;
    }
    /**
     * @param {Hierarchy} superior 
     * @returns {Hierarchy}
     */
    setSuperior(superior) {
        return this.bind(superior);
    }
    amIOverlord() {
        return this.superior===null;
    }
    amIPrivate() {
        return this.underlings.length===0;
    }
    topDog() {
        return (this.superior===null) ? this : this.superior.topDog();
    }
    findNameUnder(name) {
        if (this.name===name) return this;
        if (this.underlings.length>0) {
            for(let i=0;i<this.underlings.length;i++) {
                let result = this.underlings[i].findNameUnder(name);
                if (result!==null) { return result; } 
            }
        }
        return null;
    }
    findByName(name) {
        if (this.name===name) return this;
        return this.topDog().findNameUnder(name);
    }
    /**
     * @param {String} message 
     */
    recieveMessage(message) {
        console.log("wheee, a message: ",message);
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
        return x;
    }
    static sendMessageTo(target,message) {
        if (typeof target==='object') {
            if (target instanceof Hierarchy) {
                target.receiveMessage(message);
            } else {
                throw new Error("this type of target object is not supported");
            }
        }
        else if (typeof target==='string') {
            if (target==='*') {

            }
            else if (target==='v') {

            }
            else if (target==='^') {

            }
            else {
                target = this.findByName(target);
                this.messageTo(target,message);
            }
        } else {
            throw new Error("this type of target is not supported");
        }
    }
}

let general = new Hierarchy('Honcho');
console.log(Hierarchy.topDogs);
let fieldmarshal = new Hierarchy('Bartholomew');
fieldmarshal.addUnderling(general);

let alice = Hierarchy.createSoldier('Alice',general);
let bob = Hierarchy.createSoldier('Bob',general);
let connor = Hierarchy.createSoldier('Connor',general);
let david = Hierarchy.createSoldier('David',general);

general.addUnderling(alice);

console.log(Hierarchy.topDogs);
//alice.setSuperior(fieldmarshal);
/*
fieldmarshal.passCommandDown("attack!");
alice.passMessageUp('we are attacking!');
*/
/*
console.log('fieldmarshal sees: ',fieldmarshal);
console.log('general sees:',general);
*/