/**
 * Check value is null
 * @param {unknown} value The value to check
 * @returns {value is null} Retruns `true` if `value` is null, else `false`
 * @example
 *
 * isNull(null) // true
 * isNull(true) // false
 */
const isNull = (value) => value === null;

export default isNull;
