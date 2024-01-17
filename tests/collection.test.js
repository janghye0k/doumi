import { each, map, shuffle } from 'collection';

describe('COLLECTION TEST', () => {
  describe('each', () => {
    it('should be interatable with array-like collection', () => {
      const array = [1, 2, 3, 4];
      let count = 0;
      each(array, (value, index, arr) => {
        expect(value).toBe(array[count]);
        expect(count).toBe(index);
        expect(array).toBe(arr);
        count++;
      });
    });
    it('should be interatable with object', () => {
      const object = { a: 1, b: 2, c: 3 };
      each(object, (value, key, obj) => {
        expect(typeof value).toBe('number');
        expect(typeof key).toBe('string');
        expect(object).toBe(obj);
      });
    });
  });

  describe('map', () => {
    it('should be interatable with array-like collection', () => {
      const array = [1, 2, 3, 4];
      const results = map(array, (value) => value + 3);
      expect(results[0]).toBe(4);
    });
    it('should be interatable with object', () => {
      const object = { a: 1, b: 2, c: 3 };
      const results = map(object, (value, key) => key + value);
      expect(results[0]).toBe('a1');
    });
  });

  it('shuffle', () => {
    shuffle([1, 2, 3, 4]);
  });
});
