class Atom {
    constructor(name,atnum,period) {
        this.name = name;
        this.period = period;
        this.atnum = atnum;
        this.isRadioactive = {};
        this.electrons = 0;
        this.valentE = 0;
        this.neutrons = 0;
        this.isStable = true;
        this.atomicMass = 0;
    }
    checkIsRadioactive() {
        if(this.atnum > 83 || this.neutrons > this.atnum+2) {
            this.isRadioactive = true;
        }
        else {
            this.isRadioactive = false;
        }
    }
    addNeutrons(num) {
        this.neutrons = num;
        this.checkIsRadioactive();
        this.getAtomicMass();
    }
    addElectrons(elec) {
        this.electrons =+ elec;
    }
    addValentElectrons(velec) {
        this.valentE += velec;
        this.checkIsStable();
    }
    checkIsStable() {
        this.checkIsRadioactive;
        if(this.valentE != 0 || this.isRadioactive == true) {
            this.isStable = false;
        }
        
    }
    getAtomicMass() {
        this.atomicMass = this.atnum + this.neutrons;
    }
    

}

const yeet = new Atom("yeet",10,8);
yeet.addNeutrons(10);
yeet.addElectrons(10);
yeet.addValentElectrons(0);
yeet.getAtomicMass();
console.log(yeet);