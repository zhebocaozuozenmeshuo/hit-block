const SceneEnd = function (game) {
    const s = {
        game: game,
        // game,
    }

    game.registerAction('r', function () {
        // const m = new SceneTitle(game)
        const m = SceneTitle.new(game)
        game.replaceScene(m)
    })

    s.draw = function () {
        // draw labels
        game.context.fillText('游戏结束 按 r 重玩 ' , 30, 130)
    }

    s.update = function () {
       
    }
 
    return s
}