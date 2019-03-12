const conf = {
    preIgnitionWaterCirculate: 3,
    preIgnitionFan: 2,
    maxIgniteAttempts: 5,
    ignitionTimeIntervalS: 1,
    maxGasValve: 100,
    igniteGasValve: 50,
    minGasValve: 1,
    minFanRPM: 200,
    maxFanRPM: 2500,
    minWaterFlow: 0.001,
    maxWaterFlow: 0.02,
    postShutoffAirIntake: 2,
    postShutoffCirculation: 10
};

class Task {
	constructor(task,wait) {
		this.wait = wait;
		this.task = task;
	}
}

class TaskQueue {
    constructor(intval,executor) {
        this.interval = intval;
        this.executor = executor;
        this.q = [];
        this.ivt = null;
        this.start();
    }
    start() {
        if (this.ivt!==null) {
            clearInterval(this.ivt);
        }
        this.ivt = setInterval(this.operate,this.interval);
    }
    stop() {
        if (this.ivt!==null) {
            clearInterval(this.ivt);
            this.ivt = null;
        }
    }
    operate() {
        if (this.q.length>0) {
            let ctask = this.q.shift();
            if (ctask.wait>0) {
                --ctask.wait;
                this.q.unshift(ctask);
            } else {
                if (typeof ctask.task==='Function') {
                    ctask.task();
                } else {
                    this.executor(ctask.task);
                }
            }
        }
    }
    add(task) {
        this.q.push(task);
    }
    clear() {
        this.q = [];
    }
}

class SystemState {
	constructor(general,heat,ignite,burn,air,water) {
		this.general = general;
		this.heat = heat;
		this.ignite = ignite;
		this.burn = burn;
		this.air = air;
		this.water = water;
    }
    static intoState(targetState) {
        if (targetState==='sleep') {
            this.general = 'sleep';
            sysQueue.clear();
            this.stop_fan();
            this.stop_pump();
            this.stop_gas();
        }
        else if (targetState==='preignite') {
            sysQueue.clear();
            if (conf.preIgnitionWaterCirculate<conf.preIgnitionFan) {
                sysQueue.add(new Task('start_fan',0));
                sysQueue.add(new Task('start_pump',conf.preIgnitionFan-conf.preIgnitionWaterCirculate));
                sysQueue.add(new Task('state_to_ignite',conf.preIgnitionWaterCirculate));
            } else {
                sysQueue.add(new Task('start_pump',0));
                sysQueue.add(new Task('start_fan',conf.preIgnitionWaterCirculate-conf.preIgnitionFan));
                sysQueue.add(new Task('state_to_ignite',conf.preIgnitionFan));
            }
            this.general = 'preignite';
            this.ignite = false;
            this.burn = false;
            this.air = false;
            this.water = false;
        }
        else if (targetState==='ignite') {
            sysQueue.clear();
            gasValve.setAperture(igniteGasValve);
            for(let i=0;i<conf.maxIgniteAttempts;i++) {
                sysQueue.add(new Task('spark',conf.ignitionTimeIntervalS));
            }
            this.general = 'ignite';
            this.ignite = true;
            this.burn = false;
        }
        else if (targetState==='burn') {
            this.general = 'burn';
            this.ignite = false;
            this.burn = true;
        }
        else if (targetState==='idle') {
            this.general = 'idle';
            sysQueue.add(new Task('stop_fan',conf.postShutoffAirIntake));
        }
        else if (targetState==='turnoff') {
            this.general = 'turnoff';
            this.stop_gas();
            sysQueue.clear();
            if (conf.postShutoffCirculation<conf.postShutoffAirIntake) {
                sysQueue.add(new Task('stop_pump',conf.postShutoffCirculation));
                sysQueue.add(new Task('stop_fan',conf.postShutoffAirIntake-conf.postShutoffCirculation));
                sysQueue.add(new Task('state_to_sleep',0));
            } else {
                sysQueue.add(new Task('stop_fan',conf.postShutoffAirIntake));
                sysQueue.add(new Task('stop_pump',conf.postShutoffCirculation-conf.postShutoffAirIntake));
                sysQueue.add(new Task('state_to_sleep',0));
            }
        }
    }
	effectChanges(target) {
		//deal with thermostat changes
		if (current.heat!==target.heat) {
			if (target.heat===false) {
				if (current.general==='turnoff') {
					target.general = 'sleep';
				}
				else if (current.general!=='sleep') {
					target.general = 'turnoff';
				}
			}
			else {
				if (current.general==='sleep' || current.general==='idle' || current.general==='turnoff') {
					target.general = 'preignite';
				}
			}
			current.heat = target.heat;
		}
		if (current.general!==target.general) {
            if (current.general==='sleep') {
                if (target.general!=='turnoff') {
                    target.general = 'preignite';
                }
                if (target.general==='preignite') {

                }
            }
		}
	}
}

class GasValve {
    constructor() {
        this.aperture = 0;
    }
    setAperture(newApt) {
        this.aperture = newApt;
        console.log('setting gas valve opening to ',this.aperture);
    }
    getAperture() {
        return this.aperture;
    }
}

class AirFan {
    constructor() {
        this.rpm = 0;
    }
    setRPM(newRPM) {
        this.rpm = newRPM;
        console.log('setting fan RPM to',this.rpm);
    }
    getRPM() {
        return this.rpm;
    }
}

class WaterPump {
    constructor() {
        this.speed = 0.0;
    }
    setSpeed(newSpeed) {
        this.speed = newSpeed;
        console.log('setting water pump flow to',this.speed,'m/s');
    }
    getSpeed() {
        return this.speed;
    }
}

class Igniter {
    constructor() {
        this.heat = 0.0;
    }
    getHeat() {
        return this.heat;
    }
    setHeat(newHeat) {
        //this is only for simulation
        this.heat = newHeat;
        console.log('flame heat sensor is set to',this.heat,'degrees celsius');
    }
    spark() {
        console.log('sparking now');
    }
}

class Thermostat {
    constructor(operation,targettemp,controlledDev) {
        this.operation = operation;
        this.ambienttemp = 20.0;
        this.targettemp = targettemp;
        this.controlledDevice = controlledDev;
        this.operate();
    }
    setAmbientTemp(newTemp) {
        this.ambienttemp = newTemp;
        console.log('ambient temperature is now set to',newTemp,'degrees celsius');
    }
    getAmbientTemp() {
        return this.ambienttemp;
    }
    setTargetTemp(newTemp) {
        this.targettemp = newTemp;
        console.log('target temperature is now set to',this.targettemp,'degrees celsius');
    }
    getTargetTemp() {
        return this.targettemp;
    }
    operate() {
        if (this.operation==='cooler') {
            this.controlledDevice.shouldOperate(this.getAmbientTemp()>this.getTargetTemp());
        } else {
            this.controlledDevice.shouldOperate(this.getAmbientTemp()<this.getTargetTemp());
        }
        setTimeout(this.operate,3000);
    }
}

class Heater {
    constructor(conf) {
        this.conf = conf;
        this.airFan = new AirFan();
        this.gasValve = new GasValve();
        this.waterPump = new WaterPump();
        this.igniter = new Igniter();
        this.state = new SystemState();
        this.sysQueue = new TaskQueue(1000,this.sysQCommand);
        sysQCommand('state_to_sleep');
        this.sysQCommand
        this.sysQCommand()
    }
    sysQCommand(cmd) {
        if (typeof this[cmd]==='function') {
            this[cmd]();
        }
    }
    shouldOperate(should) {
    }
    start_fan() {
        this.air = true;
        airFan.setRPM(conf.maxFanRPM);
    }
    stop_fan() {
        this.air = false;
        airFan.setRPM(0);
    }
    start_pump() {
        this.water = true;
        waterPump.setSpeed(conf.maxWaterFlow);
    }
    stop_pump() {
        this.water = false;
        waterPump.setSpeed(0);
    }
    stop_gas() {
        this.burn = false;
        gasValve.setAperture(0);
    }
    state_to_ignite() {
        this.intoState('ignite');
    }
    state_to_sleep() {
        this.intoState('sleep');
    }
}

let htr = new Heater();
let tstat = new Thermostat('heater',24.0,htr);
