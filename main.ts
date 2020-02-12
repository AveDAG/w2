let weather_prediction = 0
game.splash("It is going to" + weather_prediction)
let weather_dude = sprites.create(img`
. . b d b . . . . . b b b b . . 
. c b d d b . . . b b d d d b . 
. b c c b . . . b c d d d d b . 
. . . . . . b b c c b d b b b . 
. . . . . b d d b c c b b b c . 
. . b b b c d d b b c c c c . . 
. b d d d b c b b c . . . . . . 
c b d d d d c c c c . b b b . . 
c c b b b b c c c . b d d d b . 
. c c c b b . . b c b b d d b b 
. b b . . . . . b c c b b b b . 
b d d b b . . . . . c c c b . . 
b b d d b c . . b b b b b b b . 
. b c c c b . b d d d b b c b . 
. . . . . . b d d d b c c b . . 
. . . . . . b b b c c c b . . . 
`, SpriteKind.Player)
let weather_effects = Math.randomRange(0, 6)
if (true) {
    effects.confetti.startScreenEffect()
    weather_dude.say("confetti!!!")
} else if (false) {
    effects.blizzard.startScreenEffect()
    weather_dude.say("Ahh!!! Blizzard")
} else if (false) {
    effects.bubbles.startScreenEffect()
} else if (false) {
    effects.hearts.startScreenEffect()
} else if (false) {
    effects.smiles.startScreenEffect()
} else {
    effects.clouds.startScreenEffect()
}
