import isObject from './isObject';
import tagType from './tagType';

/**
 * Check value is WeakMap
 * @since 0.1.0
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is WeakMap, else `false`
 * @example
 *
 * isWeakMap(new WeakMap()) // true
 * isWeakMap(new Map()) // false
 */
const isWeakMap = <T extends WeakMap<any, any> = WeakMap<any, any>>(
  value: unknown
): value is T => isObject(value) && tagType(value) === 'WeakMap';

export default isWeakMap;
