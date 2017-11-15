const Paddle = function (game) {
  const o = game.imageByName('paddle')
  // const o = {
  //   image: image,
  //   x: 80,
  //   y: 120,
  //   speed: 7,
  // }
  o.x = 80
  o.y = 120
  o.speed = 7
  o.move = function (x) {
    if (x < 0) {
      x = 0
    }
    if (o.x > 300 - o.w) {
      x = 300 - o.w
    }
    o.x = x
  }
  o.moveLeft = function () {
    o.move(o.x -= o.speed)
  }
  o.moveRight = function () {
    o.move(o.x += o.speed)
  }
  const aInb = function (x, x1, x2) {
    return x >= x1 && x <= x2
  }
  o.collide = function (ball) {
    // if (ball.y + ball.h > o.y) {
    //   if (ball.x > o.x && ball.x < o.x + o.w) {
    //     // log('相撞')
    //     return true
    //   }
    // }
    // return false
    const a = o
    const b = ball
    if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
      if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
        return true
      }
    }
    return false
  }
  return o
}