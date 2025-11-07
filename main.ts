input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . # .
        # # . # #
        # # # # .
        . # # # .
        . # . # .
        `)
    basic.pause(3000)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(5000)
    basic.showLeds(`
        . . . # .
        # # . # #
        # # # # .
        . # # # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . # .
        # # . # #
        # # # # .
        . # # # .
        . # . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . # .
        # # . # #
        # # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . # .
        # # . # #
        # # # # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        # # . # #
        # # # # .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . # .
        # # . # #
        # # # # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . # .
        # # . # #
        # # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . # .
        # # . # #
        # # # # .
        . # # # .
        . # . # .
        `)
    for (let index = 0; index < 5; index++) {
        basic.showString("woof")
    }
})
basic.showLeds(`
    . . . # .
    # # . # #
    # # # # .
    . # # # .
    . # . # .
    `)
