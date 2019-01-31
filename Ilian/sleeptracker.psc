function TIMEAFTERSMARTPHONEUSE()
	if Smartphone.getActivity() < 1
		Smartphone.setTimer(20, TRACKSLEEP)
	end if
end


function TRACKSLEEP(WRISTHEARTRATE, WRISTMOVEMENT, SMARTPHONEACT, )
	if WRISTHEARTRATE < 60 && WRISTMOVEMENT < 0.6 && SMARTPHONEACT < 1
		Smartphone.time.getHours()
		Smartphone.time.getMinutes()
		Smartphone.time.getSeconds()
	end if
end
