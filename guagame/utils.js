 // declare func
 const e = sel => document.querySelector(sel)

// const log = function (s) {
//    e('#id-text-log').value += '\n' + s
// }

const log = console.log.bind()
 
const imageFromPath = function (path) {
  const img = new Image()
  img.src = path
  return img
}

// const imageByName = function (name) {
  
// }
// const rectIntersects = function (a, b) {
//   let o = a
//   let ball = b
//   if (ball.y > o.y && ball.y < o.image.height) {
//    if (ball.x > o.x && ball.x < o.x + o.image.width) {
//       return true
//    }
//   }
//   return false
// } 

const rectIntersects = function(a, b) {
    let o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}