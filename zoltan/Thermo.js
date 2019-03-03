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
function devFlameSensorGetTemp() {
}
/////////////////////////////////////////////////
function waitOneSec(); {
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
let currentState = "Sleeping"
//Actual code starts here

/*
States:
Error
Sleeping
Pre-Ignition
Ignition
Burning
Idling
Turning off
*/
function wait(time) {
    for(let i = 0; i<time; i++)
        waitOneSec();
        checkSafety();
}

function checkSafety() {
    if((devwaterPumpgetSpeed()<minWaterFlowMS) && (devwaterPumpgetState() = "On")) {
        currentState = "Error";
    }
    else if(devwaterPumpgetSpeed()>maxWaterFlowMS) {
        currentState = "Error"
    }
    else if(devwaterSensorgetPressure() > maxWaterPressure) {
        currentState = "Error"
    }
    else if((devairFangetRPM() < minFanRPM) && devthermostatshouldOperate()) {
        currentState = "Error"
    }
    else if(devairFangetRPM() > maxFanRPM) {
        currentState = "Error"
    }
    else if(devFlameSensorGetTemp() > maxFlameTemp) {
        currentState = "Error"
    }
}

while(true) {
    switch(currentState) {
        case "Sleeping":
            while(devthermostatshouldOperate() == false) {
            }
            currentState = "Pre-Ignition";
            checkSafety();
            break;

        case "Pre-Ignition":
            devwaterPumpsetState("On");
            devwaterPumpsetSpeed((minWaterFlowMS+maxWaterFlowMS)/2);
            devairFansetRPM(minFanRPM);
            if(preIgnitionFan>preIgnitionWaterCirculate) {
                wait(preIgnitionFan);
            }
            else {
                wait(preIgnitionWaterCirculate);
            }
            currentState = "Ignition";
            checkSafety();
            break;

        case "Ignition":
            devgasValvesetAperture((minGasValve+maxGasValve)/2);
            for(let i = 0; i<maxIgniteAttempts; i++) {
                devsparkIgniterignite();
                wait(ignitionTimeIntervalS);
                if(devFlameSensorGetTemp() > minFlameTemp) {
                    i = maxIgniteAttempts;
                    currentState = "Burning";
                }
                else if(i=maxIgniteAttempts-1) {
                    currentState = "Error";
                }
            }
            checkSafety();
            break;

        case "Burning":
            wait(30);
            checkSafety();
            while(currentState == "Burning") {
                if(devwaterSensorgetTemp() > tempTarget + waterTempRange) {
                    currentState = "Idling"
                }
                else if(devFlameSensorGetTemp() < minFlameTemp) {
                    currentState = "Pre-Ignition"
                }
                else if(devthermostatshouldOperate() == false) {
                    currentState = "Turning off"
                }
                checkSafety();
                wait(1);
            }
            break;

        case "Idling":
            devgasValvesetAperture(0);
            wait(5);
            while(currentState == "Idling") {
                if(devwaterSensorgetTemp() < tempTarget - waterTempRange) {
                    currentState = "Pre-Ignition"
                }
                else if(devthermostatshouldOperate() == false) {
                    currentState = "Turning off"
                }
                checkSafety();
            }
            break;

        case "Turning off":
            devgasValvesetAperture(0);
            if(postShutoffCirculation>postShutoffAirIntake) {
                wait(postShutoffCirculation);
            }
            else {
                wait(postShutoffAirIntake);
            }
            devairFansetRPM(0);
            devwaterPumpsetSpeed(0);
            devwaterPumpsetState("Off");
            break;

        case "Error":
            devgasValvesetAperture(0);
            devairFansetRPM(0);
            devwaterPumpsetSpeed(0);
            devwaterPumpgetState("Off");
            console.log("An error has occured, if you are sure nothing is wrong with the system, please restart")
            break;

        default:
            currentState = "Error";
            break;
    }
    wait(1);
}