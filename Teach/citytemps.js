class CityTemp {
    constructor(name,low,high) {
        this.name = name;
        this.low = low;
        this.high = high;
    }
    getName() {
        return this.name;
    }
    getLow() {
        return this.low;
    }
    getHigh() {
        return this.high;
    }
}

let cities = [];
cities.push(new CityTemp('Budapest',-5,38));
cities.push(new CityTemp('Stalingrad',-21,32));
cities.push(new CityTemp('Bangalore',9,51));

let avlow = 0;
let avhigh = 0;

for(let i=0;i<cities.length;i++) {
    avlow += cities[i].getLow();
    avhigh += cities[i].getHigh();
}

avlow = avlow/cities.length;
avhigh = avhigh/cities.length;

for(let i=0;i<cities.length;i++) {
    if (cities[i].getLow()<avlow) {
        console.log('outlier for avg low temp:',cities[i].getName());
    }
    if (cities[i].getHigh()>avhigh) {
        console.log('outlier for avg high temp:',cities[i].getName());
    }
}
