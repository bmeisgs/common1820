class City {
    constructor(name,hightemp,lowtemp) {
        this.name = name;
        this.hightemp = hightemp;
        this.lowtemp = lowtemp;
    }
    getTempHigh() {
        return this.hightemp;
    }
    getTempLow() {
        return this.lowtemp;
    }
}

const Budapest = new City("Budapest",35,-20);
const Khartoum = new City("Khartoum",43,5);
const Utopia = new City("Utopia",29,-5);
const Distopia = new City("Distopia",15,15);
const Yeetopia = new City("Yeetopia",69,-69);
const Normieland = new City("Normieland",38,3);
const Cairo = new City("Cairo",41,3);

let cities = [];
cities.push(Budapest);
cities.push(Khartoum);
cities.push(Cairo);
cities.push(Utopia);
cities.push(Distopia);
cities.push(Normieland);
cities.push(Yeetopia);
let avgHigh = 0;
let avgLow = 0;
for(let i=0;i<cities.length-1;i++) {
    avgHigh += cities[i].getTempHigh();
}
for(let i=0;i<cities.length-1;i++) {
    avgLow += cities[i].getTempLow();
}
avgHigh = Math.round(avgHigh/(cities.length-1));
avgLow = Math.round(avgLow/(cities.length-1));

console.log("The average highest temperature between these cities is " + avgHigh + ". The average lowest temperature between these cities is " + avgLow + ".");

let aboveAverageHigh = [];
let belowAverageLow = [];

for(let i=0;i<cities.length;i++) {
    if(cities[i].hightemp>avgHigh) {
        aboveAverageHigh.push(cities[i].name);
    }
    if(cities[i].lowtemp<avgLow) {
        belowAverageLow.push(cities[i].name);
    }
}
console.log(avgHigh);
console.log("The cities who's highest temperature is above average are: " + aboveAverageHigh + ". While the cities who's lowest temperature is below the average are: " + belowAverageLow + ".");