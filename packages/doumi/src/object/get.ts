import { isObject } from '../lang';
import { splitObjectPath } from './utils';

/**
 * Get the value at paths of object
 * @since 0.1.0
 * @template [T = any]
 * @param {object} object The object to query.
 * @param {string} paths The path of the property to get.
 * @returns {T | undefined} Returns the resolved value.
 * @example
 *
 * onst obj = { a: { b: [{}, { c: 3 }] } };
 * get(obj, 'a.b[1].c') // 3
 */
const get = <T = any>(object: object, paths: string): T | undefined => {
  let pointer: Record<string, any> = object;
  const splited = splitObjectPath(paths);
  for (const item of splited) {
    if (!isObject(pointer)) return undefined;
    pointer = pointer[item];
  }
  return pointer as T;
};

export default get;
