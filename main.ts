scene.onOverlapTile(SpriteKind.Player, assets.tile`gascan`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
let gas_can: Sprite = null
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
