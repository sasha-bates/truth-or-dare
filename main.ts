let Saul = 0
let Gene = 0
input.onButtonPressed(Button.A, function () {
    Saul = randint(0, 1)
    if (Saul == 0) {
        basic.showString("Truth")
    }
    if (Saul == 1) {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Gene = randint(0, 3)
    if (Gene == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (Gene == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (Gene == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (Gene == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
