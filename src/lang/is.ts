import tagType from './tagType';

type ConstructorObject = { name: string };

/**
 * @param {*} object The object (constructor) to used for comparison
 * @param {*} value The value to compare
 * @returns {boolean} Retruns `true` if the `value` is `object`, else `false`
 * @example
 *
 * is(String, 'str') // true
 * is(Boolean, true) // true
 * is(Boolean, 'true') // false
 */
const is = <T extends ConstructorObject>(
  object: T,
  value: unknown
): value is T => tagType(value) === object.name;

export default is;
