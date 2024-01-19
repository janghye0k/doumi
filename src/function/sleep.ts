/**
 * Trigger delay
 * @param {number} wait The number of milliseconds to delay
 */
const sleep = (wait: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, wait));

export default sleep;
