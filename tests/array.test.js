import { chunk } from 'array';

describe('ARRAY TEST', () => {
  it('chunk', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const results = chunk(arr, 2);
    expect(results).toHaveLength(3);
  });
});
