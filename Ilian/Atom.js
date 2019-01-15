class Atom {
    constructor() {
        this.numberofneutrons = 0
        this.thenumberofprotons = 0
        this.numberofelectrons = 0
        this.atomicmass = 0
    }
    numberofprotons(atomicnumber){
        this.thenumberofprotons = atomicnumber
    }
    setnumberofneutrons(atomicmass){
        this.numberofneutrons = atomicmass - this.thenumberofprotons
    }
    setnumberofelectrons(atomicnumber){
        this.numberofelectrons = atomicnumber
    }
    setatomicmass(numberofneutrons, thenumberofprotons){
        this.atomicmass = numberofneutrons + thenumberofprotons
    }
}

const atom = new Atom('hydrogen')
atom.numberofprotons(1)
console.log('the atomic number is ' + atom.thenumberofprotons)
console.log('the number of protons is ' + atom.thenumberofprotons)
atom.setnumberofneutrons(2)
console.log('the number of neutrons is ' + atom.numberofneutrons)
atom.setnumberofelectrons(1)
console.log('the number of electrons is ' + atom.thenumberofprotons)
atom.setatomicmass(1,1)
console.log('the atomic mass is ' + atom.atomicmass)