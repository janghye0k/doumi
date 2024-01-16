import { isArray, isObject } from '../lang';
import { splitObjectPath } from './utils';

const numRegex = /\d/g;

/**
 * Sets the value at path of object.
 * @template {object} T
 * @param {T} object The object to modify.
 * @param {string} paths The path of the property to set.
 * @param {*} value The value to set
 * @example
 *
 * onst obj = { };
 * set(obj, 'a.b[1].c', 3) // { a: { b: [undefined, { c: 3 }] } }
 */
const set = (object, paths, value) => {
  /** @type {any} */
  let pointer = object;
  const items = splitObjectPath(paths);
  const size = items.length;
  for (let i = 0; i < size - 1; i++) {
    const item = items[i];
    const nextItem = items[i + 1];
    if (numRegex.test(nextItem)) {
      if (!isArray(pointer[item])) pointer[item] = [];
    } else {
      if (!isObject(pointer[item])) pointer[item] = {};
    }
    pointer = pointer[item];
  }
  pointer[items[size - 1]] = value;
};

export default set;