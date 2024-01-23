import { chunk, difference, intersection, range } from 'array';

describe('ARRAY TEST', () => {
  it('chunk', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const results = chunk(arr, 2);
    expect(results).toHaveLength(3);
  });

  it('difference', () => {
    const arr = [1, 2, 3, 4, 5];
    const other = [3, 5, 6];
    expect(JSON.stringify(difference(arr, other))).toBe(
      JSON.stringify([1, 2, 4])
    );
    expect(JSON.stringify(difference(arr, other, [2], (v) => v % 5))).toBe(
      JSON.stringify([4])
    );
  });

  it('intersection', () => {
    let resutls = intersection([1, 2, 3, 4, 5], [2, 3, 4], [2, 3]);
    expect(JSON.stringify(resutls)).toBe(JSON.stringify([2, 3]));

    resutls = intersection(
      [
        { name: 'a', score: 50 },
        { name: 'b', score: 30 },
        { name: 'c', score: 60 },
        { name: 'd', score: 30 },
      ],
      [
        { name: 'e', score: 65 },
        { name: 'f', score: 100 },
      ],
      (v) => v.score > 50
    );
  });

  it('range', () => {
    expect(range(5)).toHaveLength(5);
    expect(range(3, 5).at(-1)).toBe(7);
  });
});
