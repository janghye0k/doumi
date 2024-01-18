/**
 * Check value is date-like
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is date-like, else `false`
 * @example
 *
 * isDateLike(new Date()) // true
 * isDateLike('2024-01-01') // true
 * isDateLike(100000000) // true
 * isDateLike('string') // false
 */
const isDateLike = <T = unknown>(value: T): boolean => {
  if (!value) return false;
  return !isNaN(new Date(value as any) as any);
};

export default isDateLike;
