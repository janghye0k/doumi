import isObject from './isObject';
import tagType from './tagType';

/**
 * Check value is WeakSet
 * @since 0.1.0
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is WeakSet, else `false`
 * @example
 *
 * isWeakSet(new WeakSet()) // true
 * isWeakSet(new Set()) // false
 */
const isWeakSet = <T extends WeakSet<any> = WeakSet<any>>(
  value: unknown
): value is T => isObject(value) && tagType(value) === 'WeakSet';

export default isWeakSet;
