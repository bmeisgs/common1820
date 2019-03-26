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

/**
 * Implements a task in a task queue.
 * @class
 */
class Task {
    /**
     * Constructs an instance of a Task object fit for insertion in a TaskQueue
     * @constructor
     * @param {String|Function} task either a direct function to be called OR a command name as a string 
     * @param {Number} wait number of iterations to wait before the task is to be executed 
     */
	constructor(task,wait) {
		this.wait = wait;
        this.task = task;
        this.hasran = false;
    }
    /**
     * Return the actual task
     * @returns {String|Function}
     */
    getTask() {
        return this.task;
    }
    /**
     * Returns true if the task can run now, or it decreases the wait timer by one and returns false
     * @returns {Boolean}
     */
    shouldRun() {
        if (this.wait===0) {
            this.hasran = true;
            return true;
        } else {
            --wait;
            return false;
        }
    }
    hasRun() {
        return this.hasran;
    }
}

/**
 * Implements a task queue that can poll tasks in given intervals
 * @class
 */
class TaskQueue {
    /**
     * 
     * @constructor
     * @param {Number} intval the number of milliseconds between each queue run
     * @param {Function} executor the executor function that is called when the job is a string
     * @param {String} [mop] the method of operation, default: "serial"
     */
    constructor(intval,executor,mop='serial') {
        this.interval = intval;
        this.executor = executor;
        this.mop = mop;
        /** @type {Task[]} */
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
    /**
     * 
     * @param {Task} ctask 
     * @returns {*}
     */
    executeTask(ctask) {
        let run = ctask.getTask();
        if (typeof run==='Function') {
            return run();
        } else {
            return this.executor(run);
        }
    }
    operate() {
        if (this.q.length>0) {
            if (this.mop==='serial') {
                let ctask = this.q.shift();
                if (!ctask.shouldRun()) {
                    this.q.unshift(ctask);
                } else {
                    this.executeTask(ctask);
                }
            }
            else if (this.mop==='parallel') {
                this.q = this.q.filter(function(item) {
                    if (item.shouldRun()) {
                        this.executeTask(item);
                        return false;
                    }
                    return true;
                });
            }
        }
    }
    /**
     * Add a new task to the task queue
     * @param {Task} task add a new task in the queue
     */
    add(task) {
        this.q.push(task);
        this.start();
    }
    clear() {
        this.q = [];
        this.stop();
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
    /**
     * Create an instance of a Thermostat object.
     * @constructor
     * @param {String} operation the modus operandi, "cooler" or "heater"
     * @param {Number} targettemp the initial target temperature
     * @param {Object} controlledDev the controlled device that must implement a .shouldOperate(bool) method 
     */
    constructor(operation,targettemp,controlledDev) {
        this.operation = operation;
        this.ambienttemp = 20.0;
        this.targettemp = targettemp;
        this.controlledDevice = controlledDev;
        this.operate();
    }
    /**
     * Set the current ambient temperature
     * @param {Number} newTemp the new temperature value, in degrees Celsius 
     */
    setAmbientTemp(newTemp) {
        this.ambienttemp = newTemp;
        console.log('ambient temperature is now set to',newTemp,'degrees celsius');
    }
    /**
     * Return the current ambient temperature as known by the thermostat, in degrees Celsius
     * @returns {Number}
     */
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
    /**
     * 
     */
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
		this.general = 'sleep';
		this.heat = false;
		this.ignite = false;
		this.burn = false;
		this.air = false;
        this.water = false;
        this.airFan = new AirFan();
        this.gasValve = new GasValve();
        this.waterPump = new WaterPump();
        this.igniter = new Igniter();
        this.state = new SystemState();
        this.sysQueue = new TaskQueue(1000,this.sysQCommand);
        this.state_to_sleep();
    }
    sysQCommand(cmd) {
        if (typeof this[cmd]==='function') {
            this[cmd]();
        }
    }
    shouldOperate(should) {

    }
    intoState(targetState) {
        if (targetState==='sleep') {
            this.general = 'sleep';
            this.sysQueue.clear();
            this.stop_fan();
            this.stop_pump();
            this.stop_gas();
        }
        else if (targetState==='preignite') {
            this.sysQueue.clear();
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





    start_fan() {
        this.air = true;
        this.airFan.setRPM(conf.maxFanRPM);
    }
    stop_fan() {
        this.air = false;
        this.airFan.setRPM(0);
    }
    start_pump() {
        this.water = true;
        this.waterPump.setSpeed(conf.maxWaterFlow);
    }
    stop_pump() {
        this.water = false;
        this.waterPump.setSpeed(0);
    }
    stop_gas() {
        this.burn = false;
        this.gasValve.setAperture(0);
    }
    state_to_ignite() {
        this.state.intoState('ignite');
    }
    state_to_sleep() {
        this.state.intoState('sleep');
    }
}

let htr = new Heater();
let tstat = new Thermostat('heater',24.0,htr);

