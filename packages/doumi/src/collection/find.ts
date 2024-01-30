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
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 * @since 0.1.0
 * @template T
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => boolean} predicate The function invoked per iteration.
 * @returns {boolean} Returns the matched element, else `undefined`.
 * @example
 *
 * const arr = [1, 2, 13]
 * find(arr, (value) => value > 10) // 13
 *
 * const obj = { a: 1, b: 2 }
 * find(arr, (_, key) => key === 'c') // undefined
 */
function find<T extends ArrayLike<any>>(
  collection: T,
  predicate: (value: ArrayLikeValue<T>, index: number, collection: T) => boolean
): ArrayLikeValue<T> | undefined;
function find<T extends Dictionary<any>>(
  collection: T,
  predicate: (value: DictionaryValue<T>, key: string, collection: T) => boolean
): DictionaryValue<T> | undefined;
function find<T extends Collection<any>>(
  collection: T,
  predicate: (value: CollectionValue<T>, index: any, collection: T) => boolean
): CollectionValue<T> | undefined {
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) return collection[i];
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      if (predicate(collection[key], key, collection)) return collection[key];
    }
  }
  return undefined;
}

export default find;
