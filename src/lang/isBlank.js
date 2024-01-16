import isNullish from './isNullish';
import isString from './isString';

/**
 * Check value is blank
 * @param {unknown} value The value to check
 * @returns {boolean} Retruns `true` if `value.length` is falsy, else `false`
 * @example
 *
 * isBlank('') // true
 * isBlank(undefined) // true
 * isBlank('a') // false
 */
const isBlank = (value) =>
  isString(value) ? value.length === 0 : isNullish(value);

export default isBlank;