var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var p1 = new Player(ctx, 50, "red")
var t = new Treasure(ctx, 50, "black")

function drawEverything() {
  ctx.clearRect(0,0,canvas.width, canvas.height)
  p1.draw()
  t.draw()
}

function update() {
  drawEverything()
}

update()

document.onkeydown = function (event) {
  event.preventDefault()
  switch (event.code) {
    case "ArrowUp":
      p1.move("up")
      break
    case "ArrowRight":
      p1.move("right")
      break
    case "ArrowDown":
      p1.move("down")
      break
    case "ArrowLeft":
      p1.move("left")
      break
  }
  update()
}