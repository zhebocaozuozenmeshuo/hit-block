const Block = function (game, position) {
  // position 是 [0, 0] 格式
  const p = position
  const img = game.imageByName('block')
  const o = {
    x: p[0],
    y: p[1],
    w: 30,
    h: 14,   
    alive: true,   
    lives: p[2] || 1,
  }
  o.image = img.image
  o.w = img.w
  o.h = img.h
  // const image = imageFromPath('block.png')
  // o.x = p[0]
  // o.y = p[1]
  // o.w = 30
  // o.h = 14   
  // o.alive = true  
  // o.lives = p[2] || 1
  
  o.kill = function () {
    log('kill block' + o.lives)
    o.lives --
    if(o.lives < 1) {
      o.alive = false
    }
  }
  o.collide = function (ball) {
    return o.alive && (rectIntersects(ball, o) || rectIntersects(o, ball))
  }
  return o
}