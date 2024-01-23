/**
 * Checks if n is between start and up to end
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if number is in the range, else `false`.
 * @example
 *
 * between(3, 1, 5) // true
 * between(8, 1, 5) // false
 */
function between(number: number, start: number, end: number): boolean {
  return number >= start && number <= end;
}

export default between;
