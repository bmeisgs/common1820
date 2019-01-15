class cityTemp {
    constructor(name,low,high) {
        this.name = name;
        this.high = high;
        this.lowt = low;
        
}

getName(){
  return this.name;
}

getLow(){
  return this.low;
}

getHigh(){
  return this.high;
}


var cityName = [];
cityName.push(cityTemp("Prague",-15,40));
cityName.push(cityTemp("Barcelona",5,45));
cityName.push(cityTemp("Moscow",-30,30));

for(i=0,i<=cityName.length-1;i++){
  ?
}
