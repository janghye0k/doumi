import { isObject } from '../lang';

/**
 * Create an array of a given object's own enumerable string-keyed property key-value pairs.
 * @template {object} T
 * @template {string} K
 * @template [V = any]
 * @param {T} object The object to extract entries
 * @returns {Array<[K, V]>} Returns the array of key-value pairs
 * @example
 *
 * const object = { a: 1, b: '2' }
 * const results = entries(object) // [['a', 1], ['b', '2']]
 */
const entries = (object) => {
  if (!isObject(object)) return /** @type {any} */ ([]);
  return /** @type {any} */ (Object.entries(object));
};

export default entries;
