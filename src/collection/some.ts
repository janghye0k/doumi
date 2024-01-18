import type {
  ArrayLike,
  ArrayLikeValue,
  Collection,
  CollectionValue,
  Dictionary,
  DictionaryValue,
} from '../index';
import { isArrayLike, isObject } from '../lang';
import { keys } from '../object';

/**
 * Checks if predicate returns truthy for any element of collection.
 * @template T
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => boolean} predicate The function invoked per iteration.
 * @returns {boolean} Returns true if any element passes the predicate check, else false.
 * @example
 *
 * const arr = [1, 2, 13]
 * some(arr, (value) => value > 10) // true
 *
 * const obj = { a: 1, b: 2 }
 * some(arr, (_, key) => key === 'c') // false
 */
function some<T extends ArrayLike<any>>(
  collection: T,
  predicate: (value: ArrayLikeValue<T>, index: number, collection: T) => boolean
): boolean;
function some<T extends Dictionary<any>>(
  collection: T,
  predicate: (value: DictionaryValue<T>, key: string, collection: T) => boolean
): boolean;
function some<T extends Collection<any>>(
  collection: T,
  predicate: (value: CollectionValue<T>, index: any, collection: T) => boolean
): boolean {
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) return true;
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      if (predicate(collection[key], key, collection)) return true;
    }
  }
  return false;
}

export default some;
