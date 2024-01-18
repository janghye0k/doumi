import type { Dictionary } from '../index';
import keysIn from './keysIn';

/**
 * Create an array of a given object's own and inherited enumerable string-keyed property values.
 * @template [T = any]
 * @param {object | Dictionary<T> | ArrayLike<T>} object The object to extract values
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
const valuesIn = <T = any>(
  object: object | Dictionary<T> | ArrayLike<T>
): T[] => {
  return /** @type {T[]} */ keysIn(object).map((key) => (object as any)[key]);
};

export default valuesIn;
