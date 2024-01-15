import isObject from './isObject';
import tagType from './tagType';

/**
 * Check value is WeakSet
 * @param {*} value The value to check
 * @returns {value is WeakSet} Retruns `true` if `value` is WeakSet, else `false`
 * @example
 *
 * isWeakSet(new WeakSet()) // true
 * isWeakSet(new Set()) // false
 */
const isWeakSet = (value) => isObject(value) && tagType(value) === 'WeakSet';

export default isWeakSet;
