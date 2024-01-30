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
 * Checks if predicate returns truthy for all element of collection.
 * @since 0.1.0
 * @template T
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => boolean} predicate The function invoked per iteration.
 * @returns {boolean} Returns true if all elements pass the predicate check, else false.
 * @example
 *
 * const arr = [1, 2, 5]
 * every(arr, (value) => value < 10) // true
 *
 * const obj = { a: 1, b: 2 }
 * every(arr, (_, key) => key !== 'a') // false
 */
function every<T extends ArrayLike<any>>(
  collection: T,
  predicate: (value: ArrayLikeValue<T>, index: number, collection: T) => boolean
): boolean;
function every<T extends Dictionary<any>>(
  collection: T,
  predicate: (value: DictionaryValue<T>, key: string, collection: T) => boolean
): boolean;
function every<T extends Collection<any>>(
  collection: T,
  predicate: (value: CollectionValue<T>, index: any, collection: T) => boolean
): boolean {
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (!predicate(collection[i], i, collection)) return false;
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      if (!predicate(collection[key], key, collection)) return false;
    }
  }
  return true;
}

export default every;
