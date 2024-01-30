/**
 * Create an array of a given object's own enumerable string-keyed property names.
 * @since 0.1.0
 * @template {string} T
 * @param {object} object The object to extract keys
 * @returns {T[]} Retruns the array of property names
 * @example
 *
 * keys({ a: 1, b: 2 }) // ['a', 'b']
 *
 * function Foo() {
 *  this.a = 1
 *  this.b = 2
 * }
 * Foo.prototype.c = 3
 * keys(new Foo()) // ['a', 'b']
 */
const keys = <T extends string>(object: object): T[] => {
  return Object.keys(object) as T[];
};

export default keys;
