import type { Dictionary, ArrayLike } from '../index';
import keys from './keys';

/**
 * Create an array of a given object's own enumerable string-keyed property key-value pairs.
 * @template [V = any]
 * @template {string} [K = string]
 * @param {object | Dictionary<V> | ArrayLike<V>} object The object to extract entries
 * @returns {Array<[V, K]>} Returns the array of key-value pairs
 * @example
 *
 * const object = { a: 1, b: '2' }
 * const results = entries(object) // [['a', 1], ['b', '2']]
 */
const entries = <V = any, K extends string = string>(
  object: object | Dictionary<V> | ArrayLike<V>
): Array<[V, K]> => {
  return keys<K>(object).map((key) => {
    const value = (object as any)[key];
    return [value, key];
  });
};

export default entries;
