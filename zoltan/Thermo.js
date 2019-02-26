const waterTempRange = 5;
const fanRange = 100;
const flameTempRange = 100;
const waterSpeedRange = 0.1;
const minFlameTemp = 50;
const maxFlameTemp = 1900;
const minWaterPressure = 0.9;
const maxWaterPressure = 2.0;
const minFanRPM = 200;
const maxFanRPM = 2500;
const minGasValve = 1;
const maxGasValve = 100;
const minWaterFlowMS = 0.001;
const maxWaterFlowMS = 0.02;
const maxIgniteAttempts = 5;
const ignitionTimeIntervalS = 1;
const preIgnitionWaterCirculate = 3;
const preIgnitionFan = 2;
const postShutoffAirIntake = 2;
const postShutoffCirculation = 10;

//The following are the blackboxed functions, wrote them here just for reference

function devwaterPumpgetSpeed() {
}
function devwaterPumpgetState() {
}
function devwaterPumpsetSpeed(newTargetSpeed) {
}
function devwaterPumpsetState(newState) {
}
/////////////////////////////////////////////////
function devgasValvegetAperture() {
}
function devgasValvesetAperture(newAperture) {
}
/////////////////////////////////////////////////
function devairFangetRPM() {
}
function devairFansetRPM(targetRPM) {
}
/////////////////////////////////////////////////
function devsparkIgniterignite() {
}
/////////////////////////////////////////////////
function devthermostatshouldOperate() {
}
/////////////////////////////////////////////////
function devwaterSensorgetPressure() {
}
function devwaterSensorgetTemp() {
}
/////////////////////////////////////////////////
function waitOneSec() {
}
/////////////////////////////////////////////////
/////////////////////////////////////////////////
let tempTarget = 65;

//More defaults
let currentErrorState = 0
let shouldHeat = false
let shouldIgnite = false
let shouldBurn = false
let shouldTakeInAir = false
let shouldCirculateWater = false
let currentTargetGasHeat
let currentTargetWaterSpeed
//Actual code starts here

function safetyChecks() {
    if(devwaterSensorgetPressure > maxWaterPressure) {
        shouldBurn = false
        currentErrorState = 1
        return currentErrorState
    }
    else if()
}

while(true) {
    if(shouldHeat == true) {
        if(devwaterSensorgetTemp < tempTarget - waterTempRange) {
            //
        }
    }
}