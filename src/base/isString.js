import typeOf from './typeOf';

/**
 * Check value is string
 * @param {unknown} value The value to check
 * @returns {value is string} Retruns `true` if `value` is string, else `false`
 * @example
 *
 * isString('is this string?') // true
 * isString(0) // false
 */
const isString = (value) =>
  typeof value === 'string' || typeOf(value) === 'String';

export default isString;
