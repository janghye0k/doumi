import isObject from './isObject';
import tagType from './tagType';

/**
 * Check value is Map
 * @since 0.1.0
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is Map, else `false`
 * @example
 *
 * isMap(new Map()) // true
 * isMap({ a: 1, b: 2 }) // false
 */
const isMap = <T = Map<any, any>>(value: unknown): value is T =>
  isObject(value) && tagType(value) === 'Map';

export default isMap;
