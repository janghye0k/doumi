import tagType from './tagType';
import type { Dictionary } from '../index';

/**
 * Check value is plain object
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is plain object, else `false`
 * @example
 *
 * isPlainObject({}) // true
 * isPlainObject(new Map()) // false
 * isPlainObject(1) // false
 */
const isPlainObject = <T extends Object = Dictionary<any> & Object>(
  value: unknown
): value is T => {
  return !!value && typeof value === 'object' && tagType(value) === 'Object';
};

export default isPlainObject;
