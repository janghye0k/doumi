import tagType from './tagType';

/**
 * @param {*} object The object (constructor) to used for comparison
 * @param {*} value The value to compare
 * @returns {boolean} Retruns `true` if the `value` is `object`, else `false`
 * @example
 *
 * is(String, 'str') // true
 * is(Boolean, true) // true
 * is(Boolean, 'true') // false
 */
const is = (object, value) => tagType(value) === object.name;

export default is;
