import { average, between, clamp, sum } from 'math';

describe('MATH TEST', () => {
  it('sum', () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it('average', () => {
    expect(average([1, 2, 3])).toBe(2);
  });

  it('clamp', () => {
    expect(clamp(3, 1, 5)).toBe(3);
    expect(clamp(3, 1, 2)).toBe(2);
  });

  it('between', () => {
    expect(between(3, 1, 5)).toBe(true);
    expect(between(3, 1, 2)).toBe(false);
  });
});
