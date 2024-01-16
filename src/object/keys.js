/**
 * Create an array of a given object's own enumerable string-keyed property names.
 * @template {object} T
 * @template {string} [K = string]
 * @param {T} object The object to extract keys
 * @returns {K[]} Retruns the array of property names
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
const keys = (object) => {
  return /** @type {any} */ (Object.keys(object));
};

export default keys;
