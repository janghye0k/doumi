import typeOf from './typeOf';

/**
 * Check value is boolean
 * @param {unknown} value The value to check
 * @returns {value is boolean} Retruns `true` if `value` is boolean, else `false`
 * @example
 *
 * isBoolean(true) // true
 * isBoolean('true') // false
 */
const isBoolean = (value) =>
  typeof value === 'boolean' || typeOf(value) === 'Boolean';

export default isBoolean;
