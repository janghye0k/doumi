import tagType from './tagType';

/**
 * Check value is number
 * @since 0.1.0
 * @param {*} value The value to check
 * @returns {value is number} Retruns `true` if `value` is number, else `false`
 * @example
 *
 * isNumber(123) // true
 * isNumber('123') // false
 */
const isNumber = (value: unknown): value is number =>
  typeof value === 'number' || tagType(value) === 'Number';

export default isNumber;
