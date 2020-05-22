export function randomNumberFromRange(min, max) {
  return Math.random() * (max - min) + min
}

export function randomColorFromRange(colorArray1, colorArray2) {
  if (!Array.isArray(colorArray1)) {
    throw new Error("Parameter(s) not of the type: Array")
  } else if (!Array.isArray(colorArray2)) {
    colorArray2 = colorArray1
  } else if (colorArray1.length !== colorArray2.length) {
    throw new Error("The provided color arrays don't have the same length")
  }

  const randomN = Math.random()

  const randomColor = colorArray1
    .map((num, i) => colorArray2[i] + (num - colorArray2[i]) * randomN)
    .join(",")

  if (randomColor.length == 3) return `rgb(${randomColor})`

  return `rgba(${randomColor})`
}

export function hexToRgbArray(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  if (!result) {
    throw new Error("The provided hex color isn't correct")
  }

  return [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ]
}
