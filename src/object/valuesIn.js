import keysIn from './keysIn';

/**
 * Create an array of a given object's own and inherited enumerable string-keyed property values.
 * @template {object} T
 * @template [V = any]
 * @param {T} object The object to extract values
 * @returns {V[]} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 * Foo.prototype.c = 3
 * valuesIn(new Foo()) // [1, 2, 3]
 */
const valuesIn = (object) => {
  return /** @type {V[]} */ (keysIn(object).map((key) => object[key]));
};

export default valuesIn;
