import tagType from './tagType';

/**
 * Check value is boolean
 * @param {*} value The value to check
 * @returns {value is boolean} Retruns `true` if `value` is boolean, else `false`
 * @example
 *
 * isBoolean(true) // true
 * isBoolean('true') // false
 */
const isBoolean = (value: unknown): value is boolean =>
  typeof value === 'boolean' || tagType(value) === 'Boolean';

export default isBoolean;
