/**
 * Trigger delay
 * @since 0.1.0
 * @param {number} wait The number of milliseconds to delay
 * @example
 *
 * (async () => {
 *    workDurationOneSecond();
 *    await sleep(1000);
 *    doAfterWork();
 * })()
 */
const sleep = (wait: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, wait));

export default sleep;
