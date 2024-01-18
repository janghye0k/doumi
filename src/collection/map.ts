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
 * @template [T = any]
 * @template {Collection<any>} [O = Collection<any>]
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: O) => T} callback The function invoked per iteration.
 * @returns {T[]} Returns the new mapped array.
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
