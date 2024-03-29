import type {
  ArrayLikeValue,
  Collection,
  Dictionary,
  DictionaryValue,
} from '../index';
import { isArrayLike, isObject } from '../lang';
import { keys } from '../object';

/**
 * Iterates over elements of collection and invokes iteratee for each element.
 * @since 0.1.0
 * @template [T = any]
 * @template {Collection<any>} [O = Collection<any>]
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: O) => T} callback The function invoked per iteration.
 * @returns {T[]} Returns the new mapped array.
 * @example
 *
 * const arr = [1, 2, 3]
 * map(arr, (value, index) => value + index) // [1, 3, 5]
 *
 * const obj = { a: 1, b: 2, c: 3 }
 * map(obj, (value, key) => value + key) // ['a1', 'b2', 'c3']
 */
function map<T = any, O extends ArrayLike<any> = ArrayLike<any>>(
  collection: O,
  callback: (value: ArrayLikeValue<O>, index: number, collection: O) => T
): T[];
function map<T = any, O extends Dictionary<any> = Dictionary<any>>(
  collection: O,
  callback: (value: DictionaryValue<O>, key: string, collection: O) => T
): T[];
function map<T = any, O extends Collection<any> = Collection<any>>(
  collection: O,
  callback: (value: any, index: any, collection: O) => T
): T[] {
  const resulst: T[] = [];
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      resulst.push(callback(collection[i], i, collection));
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      resulst.push(callback(collection[key], key, collection));
    }
  }
  return resulst;
}

export default map;
