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
 * @template [Returns = any]
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => void} callback The function invoked per iteration.
 * @returns {Returns[]}
 * @type {{
 *   <T extends ArrayLike<any>>(collection: T, callback: (value: any, index: number, collection: T) => Returns): Returns[]
 *   <T extends Dictionary<any>>(collection: T, callback: (value: any, key: string, collection: T) => Returns): Returns[]
 * }}
 */
const map = (collection, callback) => {
  /** @type {any[]} */
  const resulst = [];
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      resulst.push(callback(collection[i], i, collection));
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      resulst.push(
        callback(/** @type {any} */ (collection)[key], key, collection)
      );
    }
  }
  return resulst;
};

export default map;
