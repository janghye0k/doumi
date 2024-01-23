import tagType from './tagType';

/**
 * Check value is RegExp
 * @param {*} value The value to check
 * @returns {value is RegExp} Retruns `true` if `value` is RegExp, else `false`
 * @example
 *
 * isRegExp(/\d/gi) // true
 * isRegExp(new RegExp()) // true
 * isRegExp('d') // false
 */
const isRegExp = (value: unknown): value is RegExp =>
  tagType(value) === 'RegExp';

export default isRegExp;
