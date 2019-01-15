class CityTemp {
    constructor(name, low, high) {
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

let totalH = 0;
let totalL = 0;
let avgH = 0;
let avgL = 0;
let cities = [];

const tokyo = new CityTemp('Tokyo', 5, 40);
const ny = new CityTemp('New York City', 2, 25);
const van = new CityTemp('Vancouver', 1, 20);

cities.push(tokyo);
cities.push(ny);
cities.push(van);

for (let i = 0; i<cities.length-1; i++) {
    totalH += cities[i].getHigh();
    totalL += cities[i].getLow();
}
avgH = totalH / cities.length;
avgL = totalL / cities.length;

let above = [];
let below = [];

for (let i=0; i<cities.length; i++) {
    if (cities[i].getHigh()>avgH) {
        above.push(cities[i].getName());
    }
}

for (let i=0; i<cities.length; i++) {
    if (cities[i].getLow()<avgL) {
        below.push(cities[i].getName());
    }
}

console.log('cities above average high: ' + above);
console.log('cities below average low: ' + above);










/*
function objcts (cityName, h, l) {
    cities = [];
    if (cityName !== '') {
        city = new CityTemp(cityName,h,l)
        cities.push(city)
    }
}
*/
/*
function smth (cityName, h, l) {
    city = new CityTemp(cityName, h, l);
    while (true) {
        if (cityName !== '') {
        cityNames.push(city.getName());
        highTemps.push(city.getHigh());
        lowTemps.push(city.getLow());
        totalH += city.getHigh();
        totalL += city.getLow();
    } else {
        break;
    }
}
    avgH = totalH / cities.length;
    avgL = totalL / cities.length;
    console.log('cities above average high: ');
    for (let i=0; i<cityNames.length; i++) {
        if (highTemps[i]>avgH) {
            console.log(cityNames[i]);
        }
    }
    console.log('cities below average low: ');
    for (let i=0; i<cityNames.length; i++) {
        if (lowTemps[i]<avgL) {
            console.log(cityNames[i]);
        }
    }
}

*/

/* 
function idk (cityN, cityH, cityL) {
    if (cityN !== '') {
        city = new CityTemp(cityN, cityH, cityL);
        cityNames.push(city.getName());
        highTemps.push(city.getHigh());
        lowTemps.push(city.getLow());
    }
}


function x(cityN, cityH, cityL) {
    idk(cityN, cityH, cityL)
    for (let i=0; i<cityNames.length; i++) {
        totalH += city.getHigh();
        totalL += city.getLow();
    }
    avgH = totalH / highTemps.length;
    avgL = totalL / lowTemps.length;
    console.log('cities above average high: ');
    for (let i=0; i<cityNames.length; i++) {
        if (highTemps[i]>avgH) {
            console.log(cityNames[i]);
        }
    }
    console.log('cities below average low: ');
    for (let i=0; i<cityNames.length; i++) {
        if (lowTemps[i]<avgL) {
            console.log(cityNames[i]);
        }
    }
}

idk('nyc', 2, 25)
x('vancouver', 1, 20)
x('tokyo', 5, 40)
*/