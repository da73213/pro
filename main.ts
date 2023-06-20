scene.onOverlapTile(SpriteKind.Player, assets.tile`gascan`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath9, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath3, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath8, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
let gas_can: Sprite = null
info.setLife(7)
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    ..ccc..........ffffff...
    ..faac.......ffccaaff...
    ..faaac...fffccccfff....
    ..faaaacccaaaaaaaacc....
    ..cfaaccaaaaaaabbb99c...
    .caaaaaaaaaaaab111999c..
    faaacccccccaab991bbbbac.
    fffffcccaaacabbbbaaaaaac
    ...cccaaaaaaaaaaaaaaaaaf
    ...caaaaaaaaaaaaaaaaaaf.
    ...caaaaacffcaaaaaaaff..
    ....ccccffffcfffffff....
    .......ffffacaf.........
    .......ffffaccf.........
    ........ffffff..........
    ........................
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    let gascans = 0
    gas_can = sprites.create(assets.image`gas can`, gascans)
    tiles.placeOnTile(gas_can, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
let myEnemy = sprites.create(img`
    ..ccc..........ffffff...
    ..f44c.......ffcc55ff...
    ..f544c...fffccccfff....
    ..f5544ccc55554445cc....
    ..cf55cc555555555b99c...
    .c555555555555b111999c..
    f555ccccccc55599111bb5c.
    fffffccc555c55555555555c
    ...ccc55554455555555555f
    ...c555544455555555555f.
    ...c55544cffc5555555ff..
    ....ccccffffcfffffff....
    .......ffff5c5f.........
    .......ffff5ccf.........
    ........ffffff..........
    ........................
    `, SpriteKind.Enemy)
myEnemy.follow(mySprite, 70)
myEnemy.setPosition(0, 30)
