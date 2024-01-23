import { filter, some } from '../collection';
import { isFunction } from '../lang';

/**
 * Creates an array of values that are included in all given arrays. The order and references of result values are determined by the first array.
 * @template T
 * @param {T[]} array The array to inspect.
 * @param {T[][] | [...T[][], (value: T, index: number) => any]} other The values to exclude.
 * @param [transformer] The transformer invoked per element for comparison.
 * @returns {T[]}
 * @example
 *
 * const arr = [1, 2, 3, 4, 5]
 * const other = [3, 5, 6]
 * intersection(arr, other) // [1, 2, 4]
 */
function intersection<T>(
  array: T[],
  ...other: T[][] | [...T[][], (value: T, index: number) => any]
): T[] {
  let transformer: (...arg: any[]) => any = (v: any) => v;
  const lastItem = other.at(-1);
  let o = other as T[][];
  if (isFunction(lastItem)) {
    transformer = lastItem;
    o = other.slice(0, -1) as T[][];
  }

  return filter(array, (value, index) => {
    const converted = transformer(value, index);
    return o.every((arr) =>
      some(arr, (item, i) => transformer(item, i) == converted)
    );
  });
}

export default intersection;
