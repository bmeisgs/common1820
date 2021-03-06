DEEP_SLEEP_MAX_ACTIVITY = 0.1
LIGHT_SLEEP_MAX_ACTIVITY = 0.3
SLEEP_PHONE_MAX_ACTIVITY = 0
DEEP_SLEEP_MAX_HEARTRATE = 50
LIGHT_SLEEP_MAX_HEARTRATE = 70
SLEEP_PERIOD_START_HOUR = 22
SLEEP_PERIOD_END_HOUR = 9
LAST_STATE = "awake"
CURRENT_STATE = "awake"
EXEC_FREQ_SECONDS = 10
SLEEP_LOG = ["deepsleep":0,"lightsleep":0,"awake":0]

function Measure() do
	if Smartphone.time.getHour()<SLEEP_PERIOD_END_HOUR AND Smartphone.time.getHour()>SLEEP_PERIOD_START_HOUR then 
		if Smartphone.getActivity() <= SLEEP_PHONE_MAX_ACTIVITY then
			HR = Wristband.getHeartRate()
			MV = Wristband.getMovement()
			if MV <= DEEP_SLEEP_MAX_ACTIVITY AND HR <= DEEP_SLEEP_MAX_HEARTRATE then
				CURRENT_STATE = "deepsleep"
			else if MV <= LIGHT_SLEEP_MAX_ACTIVITY AND HR <= LIGHT_SLEEP_MAX_HEARTRATE then
				CURRENT_STATE = "lightsleep"
			else
				CURRENT_STATE = "awake"
			endif
		else
			CURRENT_STATE = "awake"
		endif
		SLEEP_LOG[CURRENT_STATE] += EXEC_FREQ_SECONDS
		LAST_STATE = CURRENT_STATE
	endif
done

loop while true
	sleep(EXEC_FREQ_SECONDS)
	Measure()
endloop
