import isObject from './isObject';
import tagType from './tagType';

/**
 * Check value is Set
 * @param {*} value The value to check
 * @returns {value is Set} Retruns `true` if `value` is Set, else `false`
 * @example
 *
 * isSet(new Set()) // true
 * isSet([1, 2, 3]) // false
 */
const isSet = (value) => isObject(value) && tagType(value) === 'Set';

export default isSet;
