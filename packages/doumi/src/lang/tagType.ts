/**
 * Get Object.prototype.toString() type of value
 * @since 0.1.0
 * @param {*} value The value to check type
 * @returns {string} The prototype of `value`
 * @example
 *
 * tagType({}) // 'Object'
 * tagType(1) // 'Number'
 */
const tagType = (value: any) =>
  Object.prototype.toString.call(value).slice(`[object `.length, -1);

export default tagType;
