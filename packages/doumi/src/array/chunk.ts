import { isNullish } from '../lang';

/**
 * Chunks an array into multiple arrays, each containing size or fewer items.
 * @since 0.1.0
 * @template T
 * @param {T[]} array The array to process.
 * @param {number} size The length of each chunk
 * @returns {Array<T[]>} Returns new array of chunks
 * @example
 *
 * const array = [1, 2, 3, 4, 5, 6]
 * chunk(array, 2) // [[1, 2], [3, 4], [5, 6]]
 */
const chunk = <T>(array: T[], size: number): T[][] => {
  if (isNullish(size) || size < 1) return [];
  const resutls = [];
  const length = array.length;
  let i = 0;
  while (i < length) {
    resutls.push(array.slice(i, (i += size)));
  }
  return resutls;
};

export default chunk;
