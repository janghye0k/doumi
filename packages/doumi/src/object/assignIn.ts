import { isObject } from '../lang';
import keysIn from './keysIn';

/**
 * This method is like assign except that it iterates over own and inherited source properties.
 * @since 0.1.0
 * @param {object} object The object to merged
 * @param {...any} sources The source objects
 * @returns {any} Returns the merged `target` object.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 * Foo.prototype.c = 3;
 *
 * assignIn({ x: 'x' }, new Foo()) // { x: 'x', a: 1, b: 2, c: 3 }
 */
function assignIn<T extends object, U>(object: T, source: U): T & U;
function assignIn<T extends object, U, V>(
  object: T,
  source1: U,
  source2: V
): T & U & V;
function assignIn<T extends object, U, V, W>(
  object: T,
  source1: U,
  source2: V,
  source3: W
): T & U & V & W;
function assignIn<T extends object>(object: T, ...sources: any[]): any {
  sources.forEach((source) => {
    if (!isObject(source)) return;
    keysIn(source).forEach((key) => {
      (object as any)[key] = source[key];
    });
  });
  return object;
}

export default assignIn;
