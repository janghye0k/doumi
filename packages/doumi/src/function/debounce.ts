import { assign } from '../object';

type Debounced<T extends (...args: T[]) => any> = {
  (...args: Parameters<T>): ReturnType<T>;
  cancel: () => void;
};

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them.
 * @since 0.1.0
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay
 * @param {boolean} [immediate] If immediate is `true`, the argument `func` will be triggered at the beginning of the sequence instead of at the end.
 * @returns {Function} Returns debounce function. You can cancel debounce using `debounced.cancel`
 * @example
 *
 * const debounced = debounce(resizeHandler, 200)
 * document.body.addEventListener('resize', debounced)
 *
 * // You can cancel the trailing bebounced invocation.
 * function mustStopDebounce() {
 *   debounced.cancel()
 * }
 *
 * // Invoke `requestData` when clicked, debouncing subsequent calls.
 * $requestApiBtn.addEventListener('click', debounce(requestData, 300, true))
 */
function debounce<T extends (...args: any[]) => any = (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean = false
): Debounced<T> {
  let timeout: number | null = null;
  let result: ReturnType<T>;
  let args: any;

  const later = () => {
    timeout = null;
    if (!immediate) {
      result = func(...args);
    }
    if (!timeout) args = null;
  };

  const debounced: Debounced<T> = assign(
    (...params: Parameters<T>) => {
      args = params;
      const callNow = immediate && !timeout;
      if (timeout) clearTimeout(timeout);
      timeout = window.setTimeout(later, wait);
      if (callNow) {
        result = func(...args);
      }
      return result;
    },
    {
      cancel: () => {
        if (timeout) clearTimeout(timeout);
        timeout = null;
      },
    }
  );

  return debounced;
}

export default debounce;
