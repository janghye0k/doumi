import isNullish from './isNullish';
import typeOf from './typeOf';

/**
 * Check value is object
 * @param {unknown} value The value to check
 * @returns {value is Record<string | symbol | number, any>} Retruns `true` if `value` is object, else `false`
 * @example
 *
 * isObject({}) // true
 * isObject(new Map()) // false
 * isObject(1) // false
 */
const isObject = (value) => {
  if (isNullish(value)) return false;
  return typeof value === 'object' && typeOf(value) === 'Object';
};

export default isObject;
