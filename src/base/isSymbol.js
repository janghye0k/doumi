import typeOf from './typeOf';

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
  typeof value === 'symbol' || typeOf(value) === 'Symbol';

export default isSymbol;
