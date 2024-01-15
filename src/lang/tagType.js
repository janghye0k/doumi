/**
 * Get Object.prototype.toString() type of value
 * @param {*} value
 * @returns {string}
 */
const tagType = (value) =>
  Object.prototype.toString.call(value).slice(`[object `.length, -1);

export default tagType;
