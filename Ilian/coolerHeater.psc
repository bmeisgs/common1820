IGNITE = false
ERROR = false

loop while true
    if COMMAND = turn_on then
        STATE = pre idle 
        turnOnFan
        turnOnPump
        checkError
        if ERROR = true then
            turnOffAll
            goToError
        end if
    else break
    end if
    goToIgnition
    turnGasOn
    turnPumpOn
    loop until IGNITE = true
        ignite
        if AFTERIGNITETEMP > 90
            ignite = true
        else wait 5 sec
    end loop
    goToBurning
    turnOffIgnition
    if ERROR = true then
        turnOffAll 
        goToError
    end if
    if command = turnOff
        turnPumpOn
    else break
    if ERROR = true then
        turnOffAll 
        goToError
    stay burning?
    else
    if COMMAND = idle then
        goToidle
        turnOffFan
        turnOffGas
            if ERROR = true
                turnOffAll
                goToError
            end if
    else break
    end if
    if COMMAND = turnOff then
        goToTurnOff
        turnOnFan
    if ERROR = true then
        turnOffAll
        goToError
    else wait1Sec
    


