import { isObject } from '../lang';
import keysIn from './keysIn';

/**
 * Create an array of a given object's own and inherited enumerable string-keyed property key-value pairs.
 * @template {object} T
 * @template {string} [K = Extract<keyof T, string>]
 * @template [V = any]
 * @param {T} object The object to extract entries
 * @returns {Array<[K, V]>} Returns the array of key-value pairs
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 * Foo.prototype.c = 3
 * const results = entriesIn(new Foo()) // [['a', 1], ['b', '2'], ['c', 3]]
 */
const entriesIn = (object) => {
  if (!isObject(object)) return /** @type {any} */ ([]);
  return keysIn(object).map((key) => {
    const value = object[key];
    return /** @type {any} */ ([key, value]);
  });
};

export default entriesIn;
