import tagType from './tagType';

/**
 * Check value is date
 * @since 0.1.0
 * @param {*} value The value to check
 * @returns {value is Date} Retruns `true` if `value` is date, else `false`
 * @example
 *
 * isDate(new Date()) // true
 * isDate('2024-01-01') // false
 */
const isDate = (value: unknown): value is Date =>
  tagType(value) === 'Date' && !isNaN(value as any);

export default isDate;
