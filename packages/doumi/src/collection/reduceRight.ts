import type {
  ArrayLike,
  ArrayLikeValue,
  Collection,
  CollectionValue,
  Dictionary,
  DictionaryValue,
} from '../index';
import { isArrayLike, isObject, isUndefined } from '../lang';
import { keys } from '../object';

/**
 * Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
 *
 * The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the collection's last element is used as the initial value
 * @since 0.1.0
 * @param {*} collection The collection to iterate over.
 * @param {(accumulator: any, value: any, index: any, collection: any) => any} reducer The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {any} Returns the accumulated value.
 * @example
 *
 * const arr = [1, 2, 3]
 * reduceRight(arr, (acc, value) => `${acc}_${value}`, '') // '_3_2_1'
 */
function reduceRight<T extends ArrayLike<any> = ArrayLike<any>>(
  collection: T,
  reducer: (
    accumulator: ArrayLikeValue<T>,
    value: ArrayLikeValue<T>,
    index: number,
    collection: T
  ) => ArrayLikeValue<T>,
  accumulator?: ArrayLikeValue<T>
): ArrayLikeValue<T>;
function reduceRight<T extends ArrayLike<any> = ArrayLike<any>, V = any>(
  collection: T,
  reducer: (
    accumulator: V,
    value: ArrayLikeValue<T>,
    index: number,
    collection: T
  ) => V,
  accumulator: V
): V;
function reduceRight<T extends Dictionary<any> = Dictionary<any>>(
  collection: T,
  reducer: (
    accumulator: DictionaryValue<T>,
    value: DictionaryValue<T>,
    key: string,
    collection: T
  ) => DictionaryValue<T>,
  accumulator?: DictionaryValue<T>
): DictionaryValue<T>;
function reduceRight<T extends Dictionary<any> = ArrayLike<any>, V = any>(
  collection: T,
  reducer: (
    accumulator: V,
    value: DictionaryValue<T>,
    key: string,
    collection: T
  ) => V,
  accumulator: V
): V;
function reduceRight<T extends Collection<any> = Collection<any>, V = any>(
  collection: T,
  reducer: (
    accumulator: V,
    value: CollectionValue<T>,
    index: any,
    collection: T
  ) => V,
  accumulator?: V
): V {
  let results = accumulator as V;
  if (isArrayLike(collection)) {
    const size = collection.length;
    if (isUndefined(results)) results = collection[size - 1];
    for (let i = size - 1; i >= 0; i -= 1) {
      results = reducer(results, collection[i], i, collection);
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    const size = keyList.length;
    if (isUndefined(results)) results = collection[keyList[size - 1]];
    for (let i = size - 1; i >= 0; i -= 1) {
      const key = keyList[i];
      results = reducer(results, collection[key], key, collection);
    }
  }
  return results;
}

export default reduceRight;
