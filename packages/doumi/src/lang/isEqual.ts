import isArrayLike from './isArrayLike';
import isFunction from './isFunction';
import isPlainObject from './isPlainObject';
import isObject from './isObject';
import tagType from './tagType';

/**
 * Check values are equal
 * @since 0.1.0
 * @param {*} value
 * @param {*} compare
 * @returns {boolean} Retruns `true` if the values are equal, else `false`
 * @example
 *
 * const obj = { a: 1 };
 *
 * isEqual(obj, obj) // true
 * isEqual(obj, { a: 1 }) // true
 */
const isEqual = (value: any, compare: any): boolean => {
  const valueType = tagType(value);
  if (valueType !== tagType(compare)) return false;

  if (isObject(value)) {
    if (isArrayLike(value)) {
      if (value.length !== compare.length) return false;
      for (let i = 0; i < value.length; i++) {
        if (!isEqual(value[i], compare[i])) return false;
      }
      return true;
    }

    if (
      isPlainObject(value) &&
      Object.keys(value).length !== Object.keys(compare).length
    )
      return false;

    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        if (!isEqual(value[key], compare[key])) return false;
      }
    }
    return true;
  }

  if (isFunction(value)) return value.toString() === compare.toString();
  return value === compare;
};

export default isEqual;
