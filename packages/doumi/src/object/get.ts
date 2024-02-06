import { isArray, isObject } from '../lang';
import { isIndex, splitObjectPath } from './utils';

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
 *
 * const pkg = { exports: { '.': { import: 'file' } } };
 * get(pkg, 'exports["."].import') // 'file'
 */
const get = <T = any>(object: object, paths: string): T | undefined => {
  if (!isObject(object)) return undefined;
  let pointer = object;
  const splited = splitObjectPath(paths);
  for (const item of splited) {
    if (!isObject(pointer)) return undefined;
    if (isArray(pointer) && isIndex(item)) pointer = pointer.at(Number(item));
    else pointer = (pointer as any)[item];
  }
  return pointer as T;
};

export default get;
