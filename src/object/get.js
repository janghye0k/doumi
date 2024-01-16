import { isObject } from '../lang';
import { splitObjectPath } from './utils';

/**
 * Get the value at paths of object
 * @template {object} T
 * @param {T} object The object to query.
 * @param {string} paths The path of the property to get.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * onst obj = { a: { b: [{}, { c: 3 }] } };
 * get(obj, 'a.b[1].c') // 3
 */
const get = (object, paths) => {
  /** @type {any} */
  let pointer = object;
  const splited = splitObjectPath(paths);
  for (const item of splited) {
    if (!isObject(pointer)) return undefined;
    pointer = pointer[item];
  }
  return pointer;
};

export default get;
