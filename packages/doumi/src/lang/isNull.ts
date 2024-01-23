/**
 * Check value is null
 * @param {*} value The value to check
 * @returns {value is null} Retruns `true` if `value` is null, else `false`
 * @example
 *
 * isNull(null) // true
 * isNull(true) // false
 */
const isNull = (value: unknown): value is null => value === null;

export default isNull;
