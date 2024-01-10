/**
 * Check value is array
 * @param {unknown} value The value to check
 * @returns {value is any[]} Retruns `true` if `value` is array, else `false`
 * @example
 *
 * isArray([1, 2, 3]) // true
 * isArray(new Array()) // true
 * isArray(1) // false
 */
const isArray = (value) => Array.isArray(value);

export default isArray;
