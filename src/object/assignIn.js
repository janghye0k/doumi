import keysIn from './keysIn';

/**
 * @param {object} object The object to merged
 * @param {...any} sources The source objects
 * @returns {any} Returns object
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 * Foo.prototype.c = 3;
 *
 * assignIn({ x: 'x' }, new Foo()) // { x: 'x', a: 1, b: 2, c: 3 }
 *
 * @type {{
 *   <T extends {}, U>(object: T, source: U): T & U
 *   <T extends {}, U, V>(object: T, source1: U, source2: V): T & U & V
 *   <T extends {}, U, V, W>(object: T, source1: U, source2: V, source3: W): T & U & V & W
 *   <T extends {}>(object: T, ...sources: any[]): any
 * }}
 */
const assignIn = (object, ...sources) => {
  sources.forEach((source) =>
    keysIn(source).forEach((key) => {
      /** @type {any} */ (object)[key] = source[key];
    })
  );
  return object;
};

export default assignIn;
