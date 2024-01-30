import isObject from './isObject';

/**
 * Check value is element
 * @since 0.1.0
 * @param {*} value The value to check
 * @returns {value is Element} Retruns `true` if `value` is element, else `false`
 * @example
 *
 * isElement(document.body) // true
 * isElement('<div></div>') // false
 */
const isElement = (value: unknown): value is Element =>
  isObject(value) && value.nodeType === 1;

export default isElement;
