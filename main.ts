function right () {
    magicbit.MotorRun(magicbit.Motors.M2, 255)
    magicbit.MotorRun(magicbit.Motors.M1, -255)
}
function left () {
    magicbit.MotorRun(magicbit.Motors.M1, 255)
    magicbit.MotorRun(magicbit.Motors.M2, -255)
}
input.onButtonPressed(Button.A, function () {
    magicbit.MotorRun(magicbit.Motors.M1, 255)
})
input.onSound(DetectedSound.Loud, function () {
    magicbit.MotorRun(magicbit.Motors.M1, 0)
})
input.onButtonPressed(Button.AB, function () {
    led.toggle(3, 0)
})
input.onButtonPressed(Button.B, function () {
    magicbit.MotorRun(magicbit.Motors.M1, -255)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Help")
})
function forward () {
    magicbit.MotorRun(magicbit.Motors.M1, 255)
    magicbit.MotorRun(magicbit.Motors.M2, 255)
}
basic.showString("Hello")
