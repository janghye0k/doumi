import isObject from './isObject';
import tagType from './tagType';

/**
 * Check value is WeakMap
 * @param {*} value The value to check
 * @returns {value is WeakMap} Retruns `true` if `value` is WeakMap, else `false`
 * @example
 *
 * isWeakMap(new WeakMap()) // true
 * isWeakMap(new Map()) // false
 */
const isWeakMap = (value) => isObject(value) && tagType(value) === 'WeakMap';

export default isWeakMap;
