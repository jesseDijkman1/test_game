import { ctx, canvas } from "../context.js"

// Temporaray constants
const GRAVITY = 0
const FRICTION = 0.9

export default class Particle {
  constructor({ x, y, vx, vy, radius, color }) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.radius = radius
    this.color = color
    this.deprecation = 0.025
  }

  update() {
    if (
      this.y - this.radius + this.vy <= 0 ||
      this.y + this.radius + this.vy >= canvas.height
    ) {
      this.vy = -this.vy * FRICTION
      this.vx = this.vx * FRICTION
    } else {
      this.vy += GRAVITY
    }

    if (
      this.x - this.radius + this.vx <= 0 ||
      this.x + this.radius + this.vx >= canvas.width
    ) {
      this.vx = -this.vx * FRICTION
      this.vy = this.vy * FRICTION
    }

    this.y += this.vy
    this.x += this.vx

    this.draw()
  }

  draw() {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
  }
}
