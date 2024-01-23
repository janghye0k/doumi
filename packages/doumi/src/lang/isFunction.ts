/**
 * Check value is function
 * @param {*} value The value to check
 * @returns {value is Function} Retruns `true` if `value` is function, else `false`
 * @example
 *
 * isFunction(() => null) // true
 * isFunction({}) // false
 */
const isFunction = (value: unknown): value is (...arg: any[]) => any =>
  typeof value === 'function';

export default isFunction;
