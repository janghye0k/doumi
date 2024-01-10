import isNull from './isNull';
import isUndefined from './isUndefined';

/**
 * Check value is nullish
 * @param {unknown} value The value to check
 * @returns {boolean} Retruns `true` if `value` is null or undefined, else `false`
 * @example
 *
 * isNullish(null) // true
 * isNullish(undefined) // true
 * isNullish(0) // false
 */
const isNullish = (value) => isNull(value) || isUndefined(value);

export default isNullish;
