class Atom {
    constructor(name) {
        this.name = name;
        this.electrons = 0;
        this.protons = 0;
        this.neutrons = 0;
        this.charge = 0;
        this.mass = 0;
        this.energyLevels = '';
        this.typeOf;
    }
    calcCharge() {
        if (this.electrons !== this.protons) {
            this.charge = this.protons - this.electrons;
        }
        return this.charge;
    }
    type() {
        if (this.charge === 0) {
            return this.typeOf = 'neutral atom';
        }
        else if (this.charge > 0) {
            return this.typeOf = 'cation';
        }
        else {
            return this.typeOf = 'anion';
        }
    }
    addElectrons(e) {
        return this.electrons += e;
    }
    addProtons(p) {
        return this.protons += p;
    }
    addNeutrons(n) {
        return this.neutrons += n;
    }
    calcMassNumber() {
        this.mass = this.protons + this.neutrons;
        return this.mass;
    }
    numberOfEnergyLevels() {
        if (this.electrons <= 2) {
            return this.energyLevels = '1 energy level';
        }
        else if (this.electrons <= 8) {
            return this.energyLevels = '2 energy levels';
        }
        else if (this.electrons <= 18) {
            return this.energyLevels = '3 energy levels';
        }
        else if (this.electrons <= 32) {
            return this.energyLevels = '4 energy levels';
        }
        else if (this.electrons < 0) {
            return this.energyLevels = 'invalid';
        }
        else {
            return this.energyLevels = '5 or more energy levels';
        }
    }
}

const Hg = new Atom('Mercury');
Hg.addElectrons(80);
Hg.addProtons(81);
Hg.addNeutrons(121);
Hg.calcMassNumber();
Hg.calcCharge();
Hg.type();
Hg.numberOfEnergyLevels();

console.log(Hg.electrons);
console.log(Hg.protons);
console.log(Hg.neutrons);
console.log(Hg.mass);
console.log(Hg.charge);
console.log(Hg.typeOf);
console.log(Hg.energyLevels);