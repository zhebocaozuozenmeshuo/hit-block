const loadLevel = function (game, num) {
  // log(num)
  let blocks = []
  let n = num - 1
  const level = levels[n]
  for (let i = 0; i < level.length; i++) {
    let p = level[i]
    let b = Block(game,p)
    blocks.push(b)
  }
  return blocks
}

const enableDebugMode = function (game, toggle) {
  // 写反逻辑是为了主要的代码可以少包一层逻辑
  if (!toggle) {
    return 
  }
  // 这是为了 debug
  window.addEventListener('keydown', function (event) {
    let k = event.key
    if (k == 'p') {
      // 暂停
      paused = !paused
    } else if ('1234567'.includes(k)) {
      // 为了 debug 临时加的载入关卡功能
      blocks = loadLevel(game, Number(k))
    }
  })
  // 控制速度
  document.querySelector('#id-input-speed').addEventListener('input', function (event) {
    const input = event.target
    // log(event, input.value)
    window.fps = Number(input.value)
  })
}

let paused = false


// 第二次直播 分解代码文件后 加载关卡
const __main = function () {
  
  const images = {
    ball: 'img/ball.png',
    block: 'img/block.png',
    paddle: 'img/paddle.png',
  }

  let game = GuaGame(images, function (game) {
    const s = SceneTitle.new(game)
    game.scene = s
  })
  
  enableDebugMode(game, true)

}
__main()