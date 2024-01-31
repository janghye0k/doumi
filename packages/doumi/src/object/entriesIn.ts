import type { Collection } from '../index';
import keysIn from './keysIn';

/**
 * Create an array of a given object's own and inherited enumerable string-keyed property key-value pairs.
 * @since 0.1.0
 * @template [V = any]
 * @template {string} [K = string]
 * @param {Collection<V>} object The object to extract entries
 * @returns {Array<[V, K]>} Returns the array of key-value pairs
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 * Foo.prototype.c = 3
 * const results = entriesIn(new Foo()) // [['a', 1], ['b', '2'], ['c', 3]]
 */
const entriesIn = <V = any, K extends string = string>(
  object: Collection<V>
): Array<[V, K]> => {
  return keysIn<K>(object).map((key) => {
    const value = (object as any)[key];
    return [value, key];
  });
};

export default entriesIn;
