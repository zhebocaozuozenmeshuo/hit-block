
class SceneTitle extends GuaScene {
    constructor (game) {
        super(game)
        game.registerAction('k', function () {
            const m = Scene(game)
            game.replaceScene(m)
        })
         // draw labels
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    draw () {
        this.game.context.fillText('按 K 开始游戏' , 30, 130)
    }
    update () {
        
    }

}