import { isUndefined } from '../lang';

/**
 * Create an array of a given object's own and inherited enumerable property names.
 * @template {string} T
 * @param {object} object The object to extract keys
 * @returns {T[]} Retruns the array of property names
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
const keysIn = <T extends string>(object: object): T[] => {
  const keys: any[] = [];
  for (const key in object) {
    if (!isUndefined(key)) keys.push(key);
  }
  return keys;
};

export default keysIn;
