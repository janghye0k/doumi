import { isObject } from '../lang';
import { splitObjectPath } from './utils';

/**
 * Checks if path is a direct property of object.
 * @template {object} T
 * @param {T} object The object to query
 * @param {string} paths The path to check
 * @returns {boolean} Returns `true` if path exists, else `false`
 * @example
 *
 * const obj = { a: { b: c: 3 } }
 * has('a') // true
 * has('a.b.c') // true
 * has('a.b.d') // false
 */
const has = (object, paths) => {
  /** @type {any} */
  let pointer = object;
  const splited = splitObjectPath(paths);
  const size = splited.length;
  for (let i = 0; i < size - 1; i++) {
    const item = splited[i];
    if (!isObject(pointer)) return false;
    pointer = pointer[item];
  }
  if (!isObject(pointer)) return false;
  return splited[size - 1] in pointer;
};

export default has;
