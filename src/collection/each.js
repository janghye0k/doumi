import { isArrayLike, isObject } from '../lang';
import { keys } from '../object';

/**
 * @template T
 * @typedef {import('../index').Collection<T>} Collection
 */
/**
 * @template T
 * @typedef {import('../index').ArrayLike<T>} ArrayLike
 */
/**
 * @template T
 * @typedef {import('../index').Dictionary<T>} Dictionary
 */

/**
 * Iterates over elements of collection and invokes iteratee for each element.
 * @template {Collection<any>} T
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => void} callback The function invoked per iteration.
 * @type {{
 *   <T extends ArrayLike<any>>(collection: T, callback: (value: any, index: number, collection: T) => void): void
 *   <T extends Dictionary<any>>(collection: T, callback: (value: any, key: string, collection: T) => void): void
 * }}
 */
const each = (collection, callback) => {
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      callback(/** @type {any} */ (collection)[key], key, collection);
    }
  }
};

export default each;
