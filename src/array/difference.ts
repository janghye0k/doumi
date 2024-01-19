import { filter, map } from '../collection';
import { isFunction } from '../lang';

/**
 * Creates an array of array values not included in the other given arrays. The order and references of result values are determined by the first array.
 * @template T
 * @param {T[]} array The array to inspect.
 * @param {T[][] | [...T[][], (value: T, index: number) => any]} other The values to exclude.
 * @param [transformer] The transformer invoked per element for comparison.
 * @returns {T[]}
 * @example
 *
 * const arr = [1, 2, 3, 4, 5]
 * const other = [3, 5, 6]
 * difference(arr, other) // [1, 2, 4]
 */
function difference<T>(
  array: T[],
  ...other: T[][] | [...T[][], (value: T, index: number) => any]
): T[] {
  let o: T[] = [];
  let transformer: (...arg: any[]) => any = (v: any) => v;
  const lastItem = other.at(-1);
  if (isFunction(lastItem)) {
    transformer = lastItem;
    o = other.slice(0, -1).flat() as T[];
  } else o = other.flat() as T[];
  const comapre = map(o, transformer);
  return filter(
    array,
    (value, index) => !comapre.includes(transformer(value, index))
  );
}

export default difference;
