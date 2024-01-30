import isArrayLike from './isArrayLike';
import isMap from './isMap';
import isNullish from './isNullish';
import isObject from './isPlainObject';
import isSet from './isSet';

/**
 * Check value is empty
 * @since 0.1.0
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is empty, else `false`
 * @example
 *
 * isEmpty([]) // true
 * isEmpty({}) // true
 * isEmpty(new Set()) // true
 * isEmpty(false) // false
 */
const isEmpty = (value: unknown): boolean => {
  if (isNullish(value)) return true;
  if (isArrayLike(value)) return !value.length;
  if (isMap(value) || isSet(value)) return !value.size;
  if (isObject(value)) return !Object.keys(value).length;
  return false;
};

export default isEmpty;
