import { debounce, sleep, throttle } from 'function';

describe('FUNCTION TEST', () => {
  describe('debounce', () => {
    let count = 0;
    const countUp = () => (count += 1);

    afterEach(() => (count = 0));

    it('should be execute function after delay', async () => {
      const debounced = debounce(countUp, 250);
      debounced();
      debounced();
      expect(count).toBe(0);
      await sleep(250);
      expect(count).toBe(1);
    });

    it('can be cancel debounced function', async () => {
      const debounced = debounce(countUp, 250);
      debounced();
      expect(count).toBe(0);
      debounced.cancel();
      await sleep(250);
      expect(count).toBe(0);
    });

    it('should be execute function immediatly, when pass immediate `true`', async () => {
      const debounced = debounce(countUp, 250, true);
      debounced();
      expect(count).toBe(1);
    });
  });

  describe('throttle', () => {
    let count = 0;
    const countUp = () => (count += 1);

    afterEach(() => (count = 0));

    it('should be execute once at delay', async () => {
      const throttled = throttle(countUp, 250);
      throttled();
      throttled();
      throttled();
      expect(count).toBe(1);
      await sleep(250);

      throttled();
      expect(count).toBe(2);

      await sleep(250);
      expect(count).toBe(3);
    });

    it('can be cancel throttled function', async () => {
      const throttled = throttle(countUp, 250);
      throttled();
      throttled();
      throttled();
      expect(count).toBe(1);
      await sleep(250);

      throttled();
      expect(count).toBe(2);
      throttled.cancel();

      await sleep(250);
      expect(count).toBe(2);
    });

    it('options.leading = false', async () => {
      const throttled = throttle(countUp, 250, { leading: false });
      throttled();
      expect(count).toBe(0);
      await sleep(250);
      expect(count).toBe(1);
    });

    it('options.trailing = false', async () => {
      const throttled = throttle(countUp, 250, { trailing: false });
      throttled();
      throttled();
      throttled();
      expect(count).toBe(1);
      await sleep(250);
      expect(count).toBe(1);
    });
  });
});
