import sum from './sum';

/**
 * Computes the average of the values
 * @param {number[]} values
 * @returns {number}
 * @example
 *
 * average([1, 2, 3]) // 2
 */
function average(values: number[]): number {
  const size = values.length;
  if (size === 0) return 0;
  return sum(values) / size;
}

export default average;
