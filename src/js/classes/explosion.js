import Particle from "./particle.js"
import { randomNumberFromRange, randomColorFromRange } from "../utils.js"

export default class Explosion {
  constructor({ x, y, colors, duration, minSpeed, maxSpeed, particles }) {
    this.originX = x
    this.originY = y

    this.colors =
      Array.isArray(colors) && colors.every((c) => Array.isArray(c))
        ? colors
        : [colors]

    this.duration = duration
    this.maxSpeed = maxSpeed
    this.minSpeed = minSpeed || Math.cbrt(maxSpeed)
    this.particlesAmount = particles
    this.particles = []

    this._onEndCb = undefined

    this.explode()
  }

  explode() {
    for (let i = 0; i < this.particlesAmount; i++) {
      const angle =
        ((Math.PI * 2) / this.particlesAmount) * i +
        randomNumberFromRange(-0.75, 0.75)

      const x =
        Math.cos(angle) * randomNumberFromRange(this.minSpeed, this.maxSpeed)
      const y =
        Math.sin(angle) * randomNumberFromRange(this.minSpeed, this.maxSpeed)

      const particle = new Particle({
        x: this.originX,
        y: this.originY,
        vx: x,
        vy: y,
        radius: randomNumberFromRange(1.5, 5),
        color: randomColorFromRange(...this.colors),
      })

      if (typeof this.duration == "number") {
        // Particle deprecation for frames * duration
        particle.deprecation = particle.radius / (60 * this.duration)
      }

      particle.draw()

      this.particles.push(particle)
    }
  }

  onEnd(cb) {
    if (!cb && !this._onEndCb) {
      return
    } else if (!this._onEndCb) {
      this._onEndCb = cb
    } else if (!cb) {
      this._onEndCb()
      this._onEndCb = undefined
    }
  }

  update() {
    if (this.particles.length == 0) return void this.onEnd()

    for (let i = 0; i < this.particles.length; i++) {
      if (this.particles[i].radius == 0) {
        this.particles.splice(i, 1)
      } else {
        if (this.particles[i].radius - this.particles[i].deprecation <= 0) {
          this.particles[i].radius = 0
        } else {
          this.particles[i].radius -= this.particles[i].deprecation
        }
        this.particles[i].update()
      }
    }
  }
}
