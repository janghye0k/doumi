/**
 * Converts the first character of string to upper case and the remaining to lower case
 * @param {string} str The string to capitalize
 * @returns {string} Retruns the capitalized string
 * @example
 *
 * capitalize('HELLO') // 'Hello'
 */
const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export default capitalize;
