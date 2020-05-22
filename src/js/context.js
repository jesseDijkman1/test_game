export const canvas = document.getElementById("game")
export const ctx = canvas.getContext("2d")

export function updateCanvas() {
  canvas.height = canvas.offsetHeight
  canvas.width = canvas.offsetWidth
}
updateCanvas()

export function clearCanvas(colorOverlay) {
  if (!colorOverlay) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  } else {
    ctx.beginPath()
    ctx.fillStyle = colorOverlay
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill()
    ctx.closePath()
  }
}

export function isOutsideView(x, y, margin) {
  return (
    x > canvas.width - margin ||
    x < 0 + margin ||
    y > canvas.height - margin ||
    y < 0 + margin
  )
}
