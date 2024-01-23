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
 * Iterates over elements of collection, returning an array of all elements predicate returns truthy for
 * @template T
 * @param {T} collection The collection to iterate over
 * @param {(value: any, index: any, collection: T) => void} predicate The function invoked per iteration
 * @returns {any[]} Returns the new filterd array
 * @example
 *
 * const arr = [1, 2, 3]
 * filter(arr, (value, index) => index === 1) // [1, 3]
 *
 * const obj = { a: 1, b: 'str' }
 * filter(obj, (value, key) => typeof value === 'string') // ['str']
 */
function filter<T extends ArrayLike<any>>(
  collection: T,
  predicate: (value: ArrayLikeValue<T>, index: number, collection: T) => boolean
): ArrayLikeValue<T>[];
function filter<T extends Dictionary<any>>(
  collection: T,
  predicate: (value: DictionaryValue<T>, key: string, collection: T) => boolean
): DictionaryValue<T>[];
function filter<T extends Collection<any>>(
  collection: T,
  predicate: (value: CollectionValue<T>, index: any, collection: T) => boolean
): CollectionValue<T>[] {
  const results: any[] = [];
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) results.push(collection[i]);
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      if (predicate(collection[key], key, collection))
        results.push(collection[key]);
    }
  }
  return results;
}

export default filter;
