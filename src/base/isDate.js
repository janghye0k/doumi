import typeOf from './typeOf';

/**
 * Check value is date
 * @param {unknown} value The value to check
 * @returns {value is Date} Retruns `true` if `value` is date, else `false`
 * @example
 *
 * isDate(new Date()) // true
 * isDate('2024-01-01') // false
 */
const isDate = (value) =>
  typeOf(value) === 'Date' && !isNaN(/** @type {any} */ (value));

export default isDate;
