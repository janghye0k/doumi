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
 * Iterates over elements of collection and invokes iteratee for each element.
 * @since 0.1.0
 * @template T
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => void} callback The function invoked per iteration.
 * @example
 *
 * const arr = [1]
 * forEach(arr, (value, index) => console.log(value, index)) // 1, 0
 *
 * const obj = { a: 1 }
 * forEach(obj, (value, key) => console.log(value, key)) // 1, 'a'
 */
function forEach<T extends ArrayLike<any>>(
  collection: T,
  callback: (value: ArrayLikeValue<T>, index: number, collection: T) => void
): void;
function forEach<T extends Dictionary<any>>(
  collection: T,
  callback: (value: DictionaryValue<T>, key: string, collection: T) => void
): void;
function forEach<T extends Collection<any>>(
  collection: T,
  callback: (value: CollectionValue<T>, index: any, collection: T) => void
): void {
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      callback(collection[key], key, collection);
    }
  }
}

export default forEach;
