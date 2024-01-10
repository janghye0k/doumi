import isObjectLike from './isObjectLike';
import typeOf from './typeOf';

/**
 * Check value is WeakMap
 * @param {*} value The value to check
 * @returns {value is WeakMap} Retruns `true` if `value` is WeakMap, else `false`
 * @example
 *
 * isWeakMap(new WeakMap()) // true
 * isWeakMap(new Map()) // false
 */
const isWeakMap = (value) => isObjectLike(value) && typeOf(value) === 'WeakMap';

export default isWeakMap;
