class CityTemp {
    constructor() {
        this.totalH = 0;
        this.totalL = 0;
        this.avgH = 0;
        this.avgL = 0;
        this.cityNames = {};
        this.highTemp = {};
        this.lowTemp = {};
    }
    calcTemps(name, highT, lowT) {
        while (true) {
            this.cityNames.push(name);
            this.highTemp.push(highT);
            this.lowTemp.push(lowT);
            this.totalH += highT;
            this.totalL += highL;
            if (name === '') {
                break;
            }
        }
    }
}
