import { isUndefined } from '../lang';

/**
 * Create an array of a given object's own and inherited enumerable property names.
 * @template {object} T
 * @template {string} [K = Extract<keyof T, string>]
 * @param {T} object The object to extract keys
 * @returns {K[]} Retruns the array of property names
 * @example
 *
 * keysIn({ a: 1, b: 2 }) // ['a', 'b']
 *
 * function Foo() {
 *  this.a = 1
 *  this.b = 2
 * }
 * Foo.prototype.c = 3
 * keysIn(new Foo()) // ['a', 'b', 'c']
 */
const keysIn = (object) => {
  /** @type {any[]} */
  const keys = [];
  for (const key in object) {
    if (!isUndefined(key)) keys.push(key);
  }
  return keys;
};

export default keysIn;
