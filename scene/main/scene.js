const Scene = function (game) {
    const s = {
        game: game,
        // game,
    }
    // 初始化
    const paddle = Paddle(game)
    const ball = Ball(game)
    
    blocks = loadLevel(game, 1)
  
    score = 0
    

    game.registerAction('a', function () {
        paddle.moveLeft()
    })
    
    game.registerAction('d', function () {
        paddle.moveRight()
    })

    game.registerAction('f', function () {
        ball.fire()
    })
    
    s.draw = function () {
        //场景 中间层
        // 判断游戏结束
        if (ball.y > paddle.y) {
            // 跳转到游戏结束的场景
            const end = SceneEnd(game)
            game.replaceScene(end)
            return 
        }
        // if (gameover) {
        // // 话游戏结束画面
        // return 
        // }
        // draw 背景
        // game.context.fillStyle = "#554"
        // game.context.fillRect(0, 0, 400, 300)
        // draw
        game.drawImage(paddle)
        game.drawImage(ball)
        // draw blocks
        for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        if (block.alive) {
            game.drawImage(block)
        }
        }  
        // draw labels
        game.context.fillText('分数： ' + score , 10, 147)
    }

    s.update = function () {
        if (paused) {
            return
        }
        ball.move()
        // 判断相撞
        if (paddle.collide(ball)) {
          // 这里应该调用一个 ball.反弹() 来实现
          // ball.speedY *= -1
          ball.反弹()
        }
        // 判断 ball 和 blocks 相撞
        for (let i = 0; i < blocks.length; i++) {
          const block = blocks[i];
          if (block.collide(ball)) {
            // 这里应该调用一个 ball.反弹() 来实现
            // ball.speedY *= -1
            log('撞到砖块' + i)
            block.kill()
  
            // 更新分数
            score += 100
            ball.反弹()
          }
        } 
    }

     // mouse event
     let enableDrag = false
     game.canvas.addEventListener('mousedown', function (event) {
     // 检查是否点中 ball
       const x = event.offsetX
       const y = event.offsetY
       if (ball.hasPoint(x, y)) {
         // 设置拖拽状态
         enableDrag = true
       }
       log(x, y)
     })
     game.canvas.addEventListener('mousemove', function (event) {
       // 检查是否点中 ball
       let x = event.offsetX
       let y = event.offsetY
       if (enableDrag) {
         log(x, y)
         ball.x = x
         ball.y = y
       }
     })
     game.canvas.addEventListener('mouseup', function (event) {
        // 检查是否点中 ball 
        enableDrag = false     
      })

     
    return s
}