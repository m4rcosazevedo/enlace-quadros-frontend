/**
 * @param {number} currentValue currentValue
 * @param {number} lessValue less than or equal to the value
 * @param {number} greaterValue greater value
 * @return {boolean} currentValue .
 */
export function between (currentValue, lessValue, greaterValue) {
  return currentValue >= lessValue && currentValue < greaterValue
}

/**
 * @param {boolean} condition
 * @return {boolean} denies the condition value
 */
export function not (condition) {
  return !condition
}

/**
 @param {number} max max number
 * @return {number} largest number that can be drawn
 */
export function sortNumber (max = 10) {
  return Math.floor(Math.random() * (max))
}

/**
 * @param {array} array with strings or numbers
 * @return {array} array shuffle
 */
export function shuffle (array) {
  const copy = [...array]

  for (let i = copy.length - 1; i > 0; i--) {
    const j = sortNumber(i + 1)

    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }

  return copy
}
