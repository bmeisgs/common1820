class Atom {
    constructor(name) {
        this.name = name;
        this.protons = 0;
        this.neutrons = 0;
        this.electrons = 0;
        this.atomicNum = atomicNum;
        this.isRadioactive = {};
        this.atomicMass = 0;
    }

   isRadioactive() {
        if(this.atomicNum > 83 || this.neutrons > this.atomicNum+2) {
            this.isRadioactive = true;
        }
        else {
            this.isRadioactive = false;
        }
    }