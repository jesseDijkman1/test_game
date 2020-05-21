export const canvas = document.getElementById("game")
export const ctx = canvas.getContext("2d")

export function updateCanvas() {
  canvas.height = canvas.offsetHeight
  canvas.width = canvas.offsetWidth
}
updateCanvas()

export function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
