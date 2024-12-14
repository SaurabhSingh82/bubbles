controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Left)
})
bubble.createBoard()
bubble.load_bubble()
let mySprite = sprites.create(img`
    ..........................dddd
    ..........6...............dd..
    ...........66..6666......ddd..
    ..........66666666667....dd...
    ......d...676666667667..ddd...
    .dddddd...667666666766..dd....
    .dddddd....667777766676ddd....
    ......dd...667dd7777767dd.....
    .......dd..66cd961dd977dd.....
    ........dd.666d86fdd6fbc......
    .........dd.6d6dddddbdd.......
    ..........dd6bddedddddb.......
    ......3333.ddcdddeebdda.......
    .....333333.bcbddddddac.......
    .....333333.caaaabbbaa........
    .....333333..a5aaabaa5........
    .....333333...aaaaaaaa........
    .......3333...aa7aa55.........
    .......33......a55555.........
    ...............a55575.........
    ...............a55555.........
    ...............aa5555.........
    ................aaaaa.........
    ...............a55555.........
    ..............aaaaaaa.........
    ..............a555555.........
    .............a5555555.........
    ............aaaaa5555.........
    ...........aa55555555.........
    ..........aa555a555555........
    ..........a55aaa555555........
    .........a555aa5555a755.......
    ........aa55aa57555a555.......
    .......aa55aa555555a555.......
    .......a55aa555a555a555a......
    ........aaaaaaaaaaaaaaaa......
    ..........bbbb...bbb..........
    ..........ddd....ddd..........
    .........ddd.....ddd..........
    ........ddd......ddd..........
    .......dddd......ddd..........
    ......dddd.......ddd..........
    ......ddd.........dd..........
    .....ddd..........dd..........
    .....dd...........dd..........
    ....ddd............dd.........
    ....dd.............ddd........
    ....dddd.............dd.......
    ..............................
    ..............................
    `, SpriteKind.Bubble)
mySprite.setImage(io2_images.fear)