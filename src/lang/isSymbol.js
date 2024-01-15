import tagType from './tagType';

/**
 * Check value is symbol
 * @param {unknown} value The value to check
 * @returns {value is symbol} Retruns `true` if `value` is symbol, else `false`
 * @example
 *
 * isSymbol(Symbol('a')) // true
 * isSymbol('a') // false
 */
const isSymbol = (value) =>
  typeof value === 'symbol' || tagType(value) === 'Symbol';

export default isSymbol;
