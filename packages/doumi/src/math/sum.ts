import { reduce } from '../collection';

/**
 * Computes the sum of the values
 * @since 0.1.0
 * @param {number[]} values The values to calculate.
 * @returns {number} Returns the sum of `values`
 * @example
 *
 * sum([1, 2, 3]) // 6
 */
function sum(values: number[]): number {
  return reduce(values, (sum, value) => sum + value, 0);
}

export default sum;
