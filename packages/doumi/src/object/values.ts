import type { Dictionary } from '../index';

/**
 * Create an array of a given object's own enumerable string-keyed property values.
 * @template {object} T
 * @template [V = any]
 * @param {T} object The object to extract values
 * @returns {V[]} Returns the array of property values.
 * @example
 *
 * const object = { a: 1, b: '2' }
 * const results = values(object) // [1, '2']
 */
const values = <T = any>(
  object: object | Dictionary<T> | ArrayLike<T>
): T[] => {
  return Object.values(object);
};

export default values;
