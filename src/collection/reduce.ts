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
 * The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the collection's first element is used as the initial value
 * @param {*} collection The collection to iterate over.
 * @param {(accumulator: any, value: any, index: any, collection: any) => any} reducer The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {any} Returns the accumulated value.
 * @example
 *
 * const arr = [1, 2, 3]
 * reduce(arr, (acc, value) => `${acc}_${value}`, '') // '_1_2_3'
 */
function reduce<T extends ArrayLike<any> = ArrayLike<any>>(
  collection: T,
  reducer: (
    accumulator: ArrayLikeValue<T>,
    value: ArrayLikeValue<T>,
    index: number,
    collection: T
  ) => ArrayLikeValue<T>,
  accumulator?: ArrayLikeValue<T>
): ArrayLikeValue<T>;
function reduce<T extends ArrayLike<any> = ArrayLike<any>, V = any>(
  collection: T,
  reducer: (
    accumulator: V,
    value: ArrayLikeValue<T>,
    index: number,
    collection: T
  ) => V,
  accumulator: V
): V;
function reduce<T extends Dictionary<any> = Dictionary<any>>(
  collection: T,
  reducer: (
    accumulator: DictionaryValue<T>,
    value: DictionaryValue<T>,
    key: string,
    collection: T
  ) => DictionaryValue<T>,
  accumulator?: DictionaryValue<T>
): DictionaryValue<T>;
function reduce<T extends Dictionary<any> = ArrayLike<any>, V = any>(
  collection: T,
  reducer: (
    accumulator: V,
    value: DictionaryValue<T>,
    key: string,
    collection: T
  ) => V,
  accumulator: V
): V;
function reduce<T extends Collection<any> = Collection<any>, V = any>(
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
    if (isUndefined(results)) results = collection[0];
    for (let i = 0; i < collection.length; i++) {
      results = reducer(results, collection[i], i, collection);
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    if (isUndefined(results)) results = collection[keyList[0]];
    for (const key of keyList) {
      results = reducer(results, collection[key], key, collection);
    }
  }
  return results;
}

export default reduce;
