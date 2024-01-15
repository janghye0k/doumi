import tagType from './tagType';

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
  typeof value === 'string' || tagType(value) === 'String';

export default isString;
