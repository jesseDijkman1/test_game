import "./main.scss"

import { canvas, updateCanvas, clearCanvas } from "./js/context.js"
import { hexToRgbArray } from "./js/utils.js"
import Particle from "./js/classes/particle.js"
import Explosion from "./js/classes/explosion.js"

window.onresize = () => {
  updateCanvas()
}

const explosions = []

canvas.onclick = (event) => {
  const explosion = new Explosion({
    x: event.clientX,
    y: event.clientY,
    colors: [
      [255, 125, 0],
      [255, 0, 0],
    ],
    duration: 1,
    maxSpeed: 5,
    minSpeed: 0.05,
    particles: 200,
  })

  explosion.onEnd(function () {
    const index = explosions.findIndex((_explosion) => _explosion == explosion)
    explosions.splice(index, 1)
  })

  explosions.push(explosion)
}

function animate() {
  requestAnimationFrame(animate)
  clearCanvas("rgba(255,255,255,0.25")

  for (let i = 0; i < explosions.length; i++) {
    explosions[i].update()
  }
}

animate()
