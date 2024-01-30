/**
 * Check value is null
 * @since 0.1.0
 * @param {*} value The value to check
 * @returns {value is null} Retruns `true` if `value` is null, else `false`
 * @example
 *
 * isNull(null) // true
 * isNull(true) // false
 */
const isNull = (value: unknown): value is null => value === null;

export default isNull;
