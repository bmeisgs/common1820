class City {
    constructor(cityname,htemp, ltemp){
        this.cityname = name
        this.highesttemp = highesttemp
        this.lowesttemp = lowesttemp
    }
}

const cities = [{cityname: "Tirana", highesttemp: 47, lowesttemp: -1},
                {cityname: "Arlington", highesttemp: 39, lowesttemp: -12},
                {cityname: "moscow", highesttemp: 12, lowesttemp: -27 }]

function getcities(averagehtemp,averageltemp){
const citiesaboveavg = []
const cieitesbelowavg = []
    for(i=0; i<cities.length; i++){
        if (cities[i]["highesttemp"]>=averagehtemp){
            citiesaboveavg.push[i]
            console.log(citiesaboveavg)
        }
        else if(["lowesttemp"]<= averageltemp){
            cieitesbelowavg.push[i]
            console.log(cieitesbelowavg)
        }
    }
}

getcities(40,-10)
