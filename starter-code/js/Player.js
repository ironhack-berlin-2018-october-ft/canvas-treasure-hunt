class Player {
  constructor(ctx, size, color) {
    this.ctx = ctx
    this.size = size
    this.color = color
    this.x = 0
    this.y = 0
    this.score = 0
  }
  move(direction) {
    switch (direction) {
      case "up":
        this.y -= this.size / 10
        break;
      case "right":
        this.x += this.size / 10
        break;
      case "down":
        this.y += this.size / 10
        break;
      case "left":
        this.x -= this.size / 10
        break;
    }
  }
  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.size, this.size)
  }
}