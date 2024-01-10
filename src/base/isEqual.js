import isArrayLike from './isArrayLike';
import isFunction from './isFunction';
import isObject from './isObject';
import isObjectLike from './isObjectLike';
import typeOf from './typeOf';

/**
 * Check values are equal
 * @param {*} value
 * @param {*} compare
 * @returns {boolean} Retruns `true` if the values are equal, else `false`
 * @example
 *
 * const obj = { a: 1 };
 *
 * isEqual(obj, obj) // true
 * isEqual(obj, {...obj}) // false
 */
const isEqual = (value, compare) => {
  const valueType = typeOf(value);
  if (valueType !== typeOf(compare)) return false;

  if (isArrayLike(value)) {
    if (value.length !== compare.length) return false;
    for (let i = 0; i < value.length; i++) {
      if (!isEqual(value, compare)) return false;
    }
    return true;
  }

  if (isObjectLike(value)) {
    if (
      isObject(value) &&
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
