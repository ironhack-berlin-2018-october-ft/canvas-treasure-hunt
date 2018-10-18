class Treasure {
  constructor(ctx, size, color) {
    this.ctx = ctx
    this.size = size
    this.color = color
    var canvasWidth = ctx.canvas.width
    var canvasHeight = ctx.canvas.height
    this.x = Math.floor(Math.random()*canvasWidth - size)
    this.y = Math.floor(Math.random()*canvasHeight - size)
  }
  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.size, this.size)
  }
}