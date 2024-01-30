import { assign } from '../object';

type ThrottleOptions = { leading?: boolean; trailing?: boolean };

type Throttled<T extends (...args: T[]) => any> = {
  (...args: Parameters<T>): ReturnType<T>;
  cancel: () => void;
};

const now = () => new Date().getTime();

/**
 *Creates a throttled function that only invokes func at most once per every wait milliseconds.
 *
 * The throttled function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them.
 * @since 0.1.0
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to delay
 * @param {ThrottleOptions} [options] The options object.
 * @param {boolean} [options.leading] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns throttled function. You can cancel throttle using `throttled.cancel`
 * @example
 *
 * const throttled = throttle(scrollHandler, 200)
 * window.addEventListener('scroll', throttled);
 *
 * // You can cancel the trailing throttled invocation.
 * throttled.cancel()
 */
function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: ThrottleOptions = {}
): Throttled<T> {
  let timeout: any;
  let result: any;
  let args: any;
  let previous = 0;
  if (!options) options = {};

  const later = () => {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func(...args);
    if (!timeout) args = null;
  };

  const throttled: Throttled<T> = assign(
    (...params: Parameters<T>) => {
      const _now = now();
      if (!previous && options.leading === false) previous = _now;
      const remaining = wait - (_now - previous);
      args = params;

      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = _now;
        result = func(...args);
        if (!timeout) args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    },
    {
      cancel: () => {
        if (timeout) clearTimeout(timeout);
        previous = 0;
        timeout = args = null;
      },
    }
  );

  return throttled;
}

export default throttle;
