/**
 * Clamp number
 * @since 0.1.0
 * @param {number} number The number to clamp
 * @param {number} lower The lower bound
 * @param {number} upper The upper bound
 * @returns {number} Returns the clamped number
 * @example
 *
 * clamp(3, 1, 5) // 3
 * clamp(8, 1, 5) // 5
 */
function clamp(number: number, lower: number, upper: number): number {
  return number < lower ? lower : number > upper ? upper : number;
}

export default clamp;
