/**
 * Check value is undefined
 * @param {*} value The value to check
 * @returns {value is undefined} Retruns `true` if `value` is undefined, else `false`
 * @example
 *
 * isUndefined(undefined) // true
 * isUndefined(0) // false
 */
const isUndefined = (value: unknown): value is undefined => value === undefined;

export default isUndefined;
