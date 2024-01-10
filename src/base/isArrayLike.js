import isNullish from './isNullish';

/**
 * Check value is array-like
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is array-like, else `false`
 * @example
 *
 * isArrayLike([1, 2, 3]) // true
 * isArrayLike('string') // true
 * isArrayLike(1) // false
 */
const isArrayLike = (value) => {
  if (isNullish(value)) return false;
  if (typeof value === 'function') return false;
  if (typeof value.length !== 'number') return false;
  return value.length > -1;
};

export default isArrayLike;
