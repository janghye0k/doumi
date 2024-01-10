import isNullish from './isNullish';

/**
 * Check value is object-like
 * @param {unknown} value The value to check
 * @returns {boolean} Retruns `true` if `value` is object-like, else `false`
 * @example
 *
 * isObjectLike({}) // true
 * isObjectLike(() => false) // true
 * isObjectLike([]) // true
 * isObjectLike(1) // false
 */
const isObjectLike = (value) => {
  if (isNullish(value)) return false;
  return typeof value === 'object' || typeof value === 'function';
};

export default isObjectLike;
