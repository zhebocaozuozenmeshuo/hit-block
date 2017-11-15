// 瓜
const GuaGame = function (images, runCallBack) {
  // images 是一个对象 里面是图片的引用名字和图片的路径
  // 程序会在所有图片载入成功后才运行

  window.fps = 10

  const g = {
    scene: null,
    actions: {},
    keydowns: {},
    images: {},
  }
  const canvas = document.querySelector('#id-canvas')
  const context = canvas.getContext('2d')
  g.canvas = canvas
  g.context = context
  
  // draw
  g.drawImage = function (guaImage) {
    context.drawImage(guaImage.image, guaImage.x, guaImage.y)
  }

  // events
  window.addEventListener('keydown', function (event) {
    g.keydowns[event.key] = true
  })
  window.addEventListener('keyup', function (event) {
    g.keydowns[event.key] = false
  })

  // update 
  g.update = function () {
    g.scene.update()
  }
  // draw
  g.draw = function () {
    g.scene.draw()
  }
  // 
  g.registerAction = function (key, callback) {
    g.actions[key] = callback
  }
  
  // timer -- 动态改变帧率
  const runloop = function () {
    // events
    // log(fps)
    const actions = Object.keys(g.actions)
    for (let i = 0; i < actions.length; i++) {
      const key = actions[i];
      if (g.keydowns[key]) {
        // 如果按键被按下，调用注册的 action
        g.actions[key]()
      }
    }
    // update
    // g.update && g.update()
    g.update()
    // crear
    context.clearRect(0, 0, canvas.width, canvas.height)
    // draw
    g.draw()
    // next run loop
    setTimeout(function () {
      runloop()
    }, 1000/fps)
  }
  // 异步
  const loads = []
  // 预先载入所有图片
  const names = Object.keys(images)
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const path = images[name]
    const img = new Image()
    img.src = path
    img.onload = function () {
      // 存入 g.images
      g.images[name] = img
      // 所有图片都成功载入之后， 调用 run
      loads.push(1)
      // log('载入图片')
      // log(loads.length , names.length)
      if (loads.length == names.length) {
      log('载入图片成功')
      g.run()
      }
    }
  }
  g.imageByName = function (name) {
    const img = g.images[name]
    const image = {
      w: img.width,
      h: img.height,
      image: img,
    }
    return image
  } 
  g.replaceScene = function (scene) {
   g.scene = scene 
  }
  g.run = function () {
    // 开始运行程序
    runCallBack(g)
    setTimeout(function () {
      runloop()
    }, 1000/fps)
  }
  return g
}