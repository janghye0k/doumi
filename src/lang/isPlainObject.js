import tagType from './tagType';

/**
 * @typedef {string | number | symbol} KeyLike
 */

/**
 * Check value is plain object
 * @template [T = { [P in KeyLike]?: any }]
 * @param {unknown} value The value to check
 * @returns {value is T} Retruns `true` if `value` is plain object, else `false`
 * @example
 *
 * isPlainObject({}) // true
 * isPlainObject(new Map()) // false
 * isPlainObject(1) // false
 */
const isPlainObject = (value) => {
  return !!value && typeof value === 'object' && tagType(value) === 'Object';
};

export default isPlainObject;
