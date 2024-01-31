import { isFunction } from '../lang';

/**
 * Creates an array of values that are included in all given arrays. The order and references of result values are determined by the first array.
 * @since 0.1.0
 * @template T
 * @param {T[][] | [...T[][], (value: T, index: number) => any]} arrays The arrays to inspect.
 * @param [transformer] The transformer invoked per element for comparison.
 * @returns {T[]}
 * @example
 *
 * const arr = [1, 2, 3, 4, 5]
 * const other = [3, 5, 6]
 * intersection(arr, other) // [3, 5]
 * intersection(arr, other, [5], (value) => value > 3) // [4, 5]
 */
function intersection<T>(
  ...arrays: T[][] | [...T[][], (value: T, index: number) => any]
): T[] {
  let transformer: (...arg: any[]) => any = (v: any) => v;
  const lastItem = arrays.at(-1);
  let arrs = arrays as T[][];
  if (isFunction(lastItem)) {
    transformer = lastItem;
    arrs = arrays.slice(0, -1) as T[][];
  }
  const map: Map<
    any,
    { values: Set<any>; count: number; [idx: number]: boolean }
  > = new Map();
  const arrsNum = arrs.length;
  arrs.forEach((arr, index) =>
    arr.forEach((item, i) => {
      const converted = transformer(item, i);
      const data = map.get(converted);
      if (data) {
        data.values.add(item);
        if (!data[index]) {
          data.count += 1;
          data[index] = true;
        }
      } else if (index === 0) {
        map.set(converted, {
          values: new Set([item]),
          count: 1,
          [index]: true,
        });
      }
    })
  );
  const results: T[] = [];
  Array.from(map.values()).forEach(
    ({ values, count }) =>
      count === arrsNum && results.push(...Array.from(values.values()))
  );
  return results;
}

export default intersection;
