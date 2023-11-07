input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 30)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
})
basic.forever(function () {
	
})
