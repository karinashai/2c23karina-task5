let x_value = 0
let y_value = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    x_value = 0
    y_value = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x_value, y_value)
            basic.pause(500)
            x_value += 1
        }
        y_value += 1
        x_value = 0
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    x_value = 0
    y_value = 0
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x_value, y_value)
            basic.pause(500)
            x_value += 1
        }
        y_value += 1
        x_value = 5
        for (let index = 0; index < 5; index++) {
            x_value += -1
            led.plot(x_value, y_value)
            basic.pause(500)
        }
        x_value = 0
        y_value += 1
    }
})
