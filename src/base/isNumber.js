import typeOf from './typeOf';

/**
 * Check value is number
 * @param {unknown} value The value to check
 * @returns {value is number} Retruns `true` if `value` is number, else `false`
 * @example
 *
 * isNumber(123) // true
 * isNumber('123') // false
 */
const isNumber = (value) =>
  typeof value === 'number' || typeOf(value) === 'Number';

export default isNumber;
