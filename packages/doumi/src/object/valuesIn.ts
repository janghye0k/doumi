import type { Collection } from '../index';
import keysIn from './keysIn';

/**
 * Create an array of a given object's own and inherited enumerable string-keyed property values.
 * @since 0.1.0
 * @template [T = any]
 * @param {Collection<T>} object The object to extract values
 * @returns {T[]} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 * Foo.prototype.c = 3
 * valuesIn(new Foo()) // [1, 2, 3]
 */
const valuesIn = <T = any>(object: Collection<T>): T[] => {
  return /** @type {T[]} */ keysIn(object).map((key) => (object as any)[key]);
};

export default valuesIn;
