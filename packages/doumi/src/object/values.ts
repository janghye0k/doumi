import type { Collection } from '../index';

/**
 * Create an array of a given object's own enumerable string-keyed property values.
 * @since 0.1.0
 * @template [T = any]
 * @param {Collection<T>} object The object to extract values
 * @returns {T[]} Returns the array of property values.
 * @example
 *
 * const object = { a: 1, b: '2' }
 * const results = values(object) // [1, '2']
 */
const values = <T = any>(object: Collection<T>): T[] => {
  return Object.values(object) as T[];
};

export default values;
