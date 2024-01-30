import type { ArrayLike } from '../index';

/**
 * Check value is array-like
 * @since 0.1.0
 * @template {ArrayLike<any>} T
 * @param {*} value The value to check
 * @returns {value is T} Retruns `true` if `value` is array-like, else `false`
 * @example
 *
 * isArrayLike([1, 2, 3]) // true
 * isArrayLike('string') // true
 * isArrayLike(1) // false
 */
const isArrayLike = <T extends ArrayLike<any>>(value: any): value is T => {
  if (
    !value ||
    typeof value === 'function' ||
    typeof value?.length !== 'number'
  )
    return false;
  return value.length > -1;
};

export default isArrayLike;
