import isObject from './isObject';
import tagType from './tagType';

/**
 * Check value is Map
 * @param {*} value The value to check
 * @returns {value is Map} Retruns `true` if `value` is Map, else `false`
 * @example
 *
 * isMap(new Map()) // true
 * isMap({ a: 1, b: 2 }) // false
 */
const isMap = (value) => isObject(value) && tagType(value) === 'Map';

export default isMap;
