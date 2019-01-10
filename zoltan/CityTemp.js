class City {
    constructor(name,hightemp,lowtemp) {
        this.name = name;
        this.hightemp = hightemp;
        this.lowtemp = lowtemp;
    }
    getTemp(temp) {
        if(temp=="h") {
            return this.hightemp;
        }
        else if(temp=="l") {
            return this.lowtemp;
        }
    }
}

const Budapest = new City("Budapest",35,-20);
const Khartoum = new City("Khartoum",43,5);
const Cairo = new City("Cairo",41,3);


cities = [];
cities.push(Budapest);
cities.push(Khartoum);
cities.push(Cairo);
let total = 0
for(let i=0;i<cities.length-1;i++) {
        total += cities[i].getTemp("h")
}
console.log(total)