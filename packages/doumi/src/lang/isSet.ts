import isObject from './isObject';
import tagType from './tagType';

/**
 * Check value is Set
 * @since 0.1.0
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is Set, else `false`
 * @example
 *
 * isSet(new Set()) // true
 * isSet([1, 2, 3]) // false
 */
const isSet = <T extends Set<any> = Set<any>>(value: unknown): value is T =>
  isObject(value) && tagType(value) === 'Set';

export default isSet;
