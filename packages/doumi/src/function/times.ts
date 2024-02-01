import { range } from '../array';
import { map } from '../collection';

/**
 * Invokes the iteratee n times, returning an array of the results of each invocation.
 *
 * The iteratee is invoked with one argument; (index).
 * @since 1.1.0
 * @param {number} count The number of times to invoke iteratee.
 * @param {Function} fn The function invoked per iteration.
 * @returns {any[]} Returns the array of results.
 * @example
 *
 * times(3, Boolean) // [false, true, true]
 */
function times<Fn extends (...args: any[]) => any>(
  count: number,
  fn: Fn
): ReturnType<Fn>[] {
  return map(range(count), (i) => fn(i));
}

export default times;
