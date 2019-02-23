let pumpOn = true;
let rads = [];

function AddRadiator(radHeadValue) {
    if (radHeadValue <= 5 & radHeadValue >= 0) {
        rads.push(radHeadValue);
    }
}

function PumpOnOrOff () {
    let excludeRooms = [];
    for (i=0;i<rads.length;i++) {
        if (rads[i] === 0) {
            excludeRooms.push(rads[i]);
        }
    }
    if (excludeRooms.length === rads.length) {
        PumpOn = false;
    }
}


// use classes (??) /is it a good idea to use classes or are functions better?/