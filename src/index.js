import { canvas, updateCanvas, clearCanvas } from "./js/context.js"
import Particle from "./js/classes/particle.js"

const particle = new Particle({
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 50,
  color: "red",
})

particle.draw()

window.onresize = () => {
  updateCanvas()

  particle.x = canvas.width / 2
  particle.y = canvas.height / 2

  particle.draw()
}
