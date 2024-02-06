import { isArray, isObject } from '../lang';
import { isIndex, splitObjectPath } from './utils';

/**
 * Sets the value at path of object.
 * @since 0.1.0
 * @param {object} object The object to modify.
 * @param {string} paths The path of the property to set.
 * @param {*} value The value to set
 * @example
 *
 * const obj = {};
 * set(obj, 'a.b[1].c', 3) // { a: { b: [undefined, { c: 3 }] } }
 *
 * const arrMap = {}
 * set(arrMap, 'arr[-3]', 10) // { arr: [10, undefined, undefined] }
 */
const set = (object: object, paths: string, value: any) => {
  let pointer: any = object;
  const items = splitObjectPath(paths);
  const size = items.length;
  for (let i = 0; i < size - 1; i++) {
    const item = items[i];
    const next = items[i + 1];
    if (!isObject(pointer[item])) {
      pointer[item] = isIndex(next) ? [] : {};
    }
    pointer = pointer[item];
  }
  let last: any = items[size - 1];
  if (isArray(pointer) && isIndex(last)) {
    last = Number(last);
    const max = pointer.length;
    if (last < 0) {
      const abs = Math.abs(last);
      if (max < abs) {
        pointer[abs - 1] = undefined;
        last = 0;
      } else last = max + last;
    }
  }
  pointer[last] = value;
};

export default set;
