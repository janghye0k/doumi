import type { Dictionary } from '../index';

/**
 * Check value is object-like
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is object-like, else `false`
 * @example
 *
 * isObject({}) // true
 * isObject(() => false) // true
 * isObject([]) // true
 * isObject(1) // false
 */
const isObject = <T extends object = Dictionary<any>>(
  value: unknown
): value is T => {
  return typeof value === 'function' || (typeof value === 'object' && !!value);
};

export default isObject;
