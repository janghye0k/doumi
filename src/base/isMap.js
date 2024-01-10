import isObjectLike from './isObjectLike';
import typeOf from './typeOf';

/**
 * Check value is Map
 * @param {*} value The value to check
 * @returns {value is Map} Retruns `true` if `value` is Map, else `false`
 * @example
 *
 * isMap(new Map()) // true
 * isMap({ a: 1, b: 2 }) // false
 */
const isMap = (value) => isObjectLike(value) && typeOf(value) === 'Map';

export default isMap;
