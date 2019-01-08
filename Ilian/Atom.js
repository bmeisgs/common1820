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
    getnumberofneutrons(atomicmass){
        this.numberofneutrons = atomicmass - this.thenumberofprotons
    }
    getnumberofelectrons(atomicnumber){
        this.numberofelectrons = atomicnumber
    }
    getatomicmass(numberofneutrons, thenumberofprotons){
        this.atomicmass = numberofneutrons + thenumberofprotons
    }
}

const atom = new Atom('hydrogen')
atom.numberofprotons(1)
console.log('the atomic number is ' + atom.thenumberofprotons)
console.log('the number of protons is ' + atom.thenumberofprotons)
atom.getnumberofneutrons(2)
console.log('the number of neutrons is ' + atom.numberofneutrons)
atom.getnumberofelectrons(1)
console.log('the number of electrons is ' + atom.thenumberofprotons)
atom.getatomicmass(1,1)
console.log('the atomic mass is ' + atom.atomicmass)



