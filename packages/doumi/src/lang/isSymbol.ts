import tagType from './tagType';

/**
 * Check value is symbol
 * @since 0.1.0
 * @param {*} value The value to check
 * @returns {value is symbol} Retruns `true` if `value` is symbol, else `false`
 * @example
 *
 * isSymbol(Symbol('a')) // true
 * isSymbol('a') // false
 */
const isSymbol = (value: unknown): value is symbol =>
  typeof value === 'symbol' || tagType(value) === 'Symbol';

export default isSymbol;
