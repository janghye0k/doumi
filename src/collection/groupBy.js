import { isArrayLike, isObject } from '../lang';
import { has, keys } from '../object';

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
 * @template {import('../index').Collection<any>} T
 * @param {T} collection The collection to iterate over.
 * @param {(value: import('../index').CollectionValue<T>, index: any, collection: T) => string} callback The function invoked per iteration.
 * @returns {Record<string, any[]>}
 * @type {{
 *   <T extends import('../index').ArrayLike<any>>(
 *     collection: T,
 *     callback: (value: import('../index').ArrayLikeValue<T>, index: number, collection: T) => string
 *   ):Record<string, Array<import('../index').ArrayLikeValue<T>>>
 *   <T extends import('../index').Dictionary<any>>(
 *     collection: T,
 *     callback: (value: import('../index').DictionaryValue<T>, key: string, collection: T) => string
 *   ):Record<string, Array<import('../index').DictionaryValue<T>>>
 * }}
 */
const groupBy = (collection, callback) => {
  /** @type {Record<string, any>} */
  const resulst = {};
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      const groupKey = callback(collection[i], i, collection);
      if (!has(resulst, groupKey)) resulst[groupKey] = [collection[i]];
      else resulst[groupKey].push(collection[i]);
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      const groupKey = callback(collection[key], key, collection);
      if (!has(resulst, groupKey)) resulst[groupKey] = [collection[key]];
      else resulst[groupKey].push(collection[key]);
    }
  }
  return resulst;
};

export default groupBy;
