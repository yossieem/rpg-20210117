gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Click, function () {
    if (ぷれいやー.get(LedSpriteProperty.Y) == 0) {
        ぷれいやー.set(LedSpriteProperty.Y, 4)
    } else {
        ぷれいやー.change(LedSpriteProperty.Y, -1)
    }
})
gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    if (ぷれいやー.get(LedSpriteProperty.X) == 0) {
        ぷれいやー.set(LedSpriteProperty.X, 4)
    } else {
        ぷれいやー.change(LedSpriteProperty.X, -1)
    }
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Click, function () {
    if (ぷれいやー.get(LedSpriteProperty.Y) == 4) {
        ぷれいやー.set(LedSpriteProperty.Y, 0)
    } else {
        ぷれいやー.change(LedSpriteProperty.Y, 1)
    }
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    if (ぷれいやー.get(LedSpriteProperty.X) == 4) {
        ぷれいやー.set(LedSpriteProperty.X, 0)
    } else {
        ぷれいやー.change(LedSpriteProperty.X, 1)
    }
})
let てきのむき = 0
let ぷれいやー: game.LedSprite = null
ぷれいやー = game.createSprite(2, 4)
let てき = game.createSprite(4, 0)
let POW = game.createSprite(0, 1)
game.setLife(3)
basic.pause(1000)
basic.forever(function () {
    てきのむき = randint(0, 3)
    if (てきのむき == 0) {
        if (てき.get(LedSpriteProperty.Y) == 0) {
            てき.set(LedSpriteProperty.Y, 4)
        } else if (false) {
            てき.change(LedSpriteProperty.Y, -1)
        }
    } else if (てきのむき == 1) {
        if (てき.get(LedSpriteProperty.X) == 4) {
            てき.set(LedSpriteProperty.X, 0)
        } else {
            てき.change(LedSpriteProperty.X, 1)
        }
    } else if (てきのむき == 2) {
        if (てき.get(LedSpriteProperty.Y) == 4) {
            てき.set(LedSpriteProperty.Y, 0)
        } else {
            てき.change(LedSpriteProperty.Y, 1)
        }
    } else if (てきのむき == 3) {
        if (てき.get(LedSpriteProperty.X) == 0) {
            てき.set(LedSpriteProperty.X, 4)
        } else {
            てき.change(LedSpriteProperty.X, -1)
        }
    }
    basic.pause(500)
})
basic.forever(function () {
    if (ぷれいやー.isTouching(POW)) {
        てき.delete()
        POW.delete()
    }
})
basic.forever(function () {
    if (てき.isDeleted()) {
        game.addScore(1)
        てき = game.createSprite(0, 2)
        てき = game.createSprite(4, 2)
        POW = game.createSprite(2, 0)
    }
    if (ぷれいやー.isTouching(POW)) {
        てき.delete()
        てき.delete()
    }
})
basic.forever(function () {
    if (てき.isTouching(ぷれいやー)) {
        game.removeLife(1)
    }
    basic.pause(1000)
})
