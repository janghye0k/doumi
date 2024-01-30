import isNull from './isNull';
import isUndefined from './isUndefined';

/**
 * Check value is nullish
 * @since 0.1.0
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is null or undefined, else `false`
 * @example
 *
 * isNullish(null) // true
 * isNullish(undefined) // true
 * isNullish(0) // false
 */
const isNullish = (value: unknown) => isNull(value) || isUndefined(value);

export default isNullish;
