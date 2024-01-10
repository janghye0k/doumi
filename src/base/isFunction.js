/**
 * Check value is function
 * @param {unknown} value The value to check
 * @returns {value is (...args:any[]) => any} Retruns `true` if `value` is function, else `false`
 * @example
 *
 * isFunction(() => null) // true
 * isFunction({}) // false
 */
const isFunction = (value) => typeof value === 'function';

export default isFunction;
