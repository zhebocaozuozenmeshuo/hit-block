const Ball = function (game) {
  const o = game.imageByName('ball')
  // const image = imageFromPath('ball.png')
  
  o.x = 80
  o.y = 90
  o.speedX = 7
  o.speedY = 7
  o.fired = false
  
  o.move = function () {
    if (o.fired) {
      // log('move')
      if (o.x < 0 || o.x > 270) {
        // log(o.x + " " + o.speedX)
        o.speedX *= -1
      }
      if (o.y < 0 || o.y > 120) {
        o.speedY *= -1
      }
      // move
      o.x += o.speedX
      o.y += o.speedY
    }
  }

  o.fire = function () {
    o.fired = true
  }

  o.反弹 = function () {
    o.speedY *= -1
  }
  o.hasPoint = function (x, y) {
    const xIn = x >= o.x && x <= o.x + o.w
    const yIn = y>= o.y && y <= o.y + o.h
    return xIn && yIn
  }
  return o
}