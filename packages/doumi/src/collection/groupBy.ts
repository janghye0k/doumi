import type {
  ArrayLike,
  ArrayLikeValue,
  Collection,
  CollectionValue,
  Dictionary,
  DictionaryValue,
} from '../index';
import { isArrayLike, isObject } from '../lang';
import { has, keys } from '../object';

/**
 * Iterates over elements of collection and invokes iteratee for each element.
 * @template T
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => string} callback The function invoked per iteration.
 * @returns {Record<string, any[]>} Returns new grouped array
 * @example
 *
 * const students = [
 *   { name: 'john', class: 'A', score: 100 },
 *   { name: 'alice', class: 'B', score: 91 },
 *   { name: 'smith', class: 'C', score: 65 },
 *   { name: 'gale', class: 'A', score: 74 },
 * ]
 *
 * const results = groupBy(students, (value) => value.score < 70 ? 'fail' : 'pass')
 * results.fail // [{ name: 'smith', class: 'C', score: 65 }]
 * results.pass.length // 3
 */
function groupBy<T extends ArrayLike<any>>(
  collection: T,
  callback: (value: ArrayLikeValue<T>, index: number, collection: T) => string
): Record<string, ArrayLikeValue<T>[]>;
function groupBy<T extends Dictionary<any>>(
  collection: T,
  callback: (value: DictionaryValue<T>, key: string, collection: T) => string
): Record<string, DictionaryValue<T>[]>;
function groupBy<T extends Collection<any>>(
  collection: T,
  callback: (value: CollectionValue<T>, index: any, collection: T) => string
): Record<string, T[]> {
  const resulst: Record<string, any[]> = {};
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
}

export default groupBy;
