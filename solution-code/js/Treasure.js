class Treasure extends Component {
  constructor(ctx, size, color) {
    var canvasWidth = ctx.canvas.width
    var canvasHeight = ctx.canvas.height
    var x = Math.floor(Math.random()*canvasWidth - size)
    var y = Math.floor(Math.random()*canvasHeight - size)
    super(ctx, size, color, x, y)
  }
}