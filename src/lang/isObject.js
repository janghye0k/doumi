/**
 * Check value is object-like
 * @template {import('../typedef').Dictionary<any>} T
 * @param {unknown} value The value to check
 * @returns {value is T} Retruns `true` if `value` is object-like, else `false`
 * @example
 *
 * isObject({}) // true
 * isObject(() => false) // true
 * isObject([]) // true
 * isObject(1) // false
 */
const isObject = (value) => {
  return typeof value === 'function' || (typeof value === 'object' && !!value);
};

export default isObject;
