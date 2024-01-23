import {
  every,
  map,
  filter,
  find,
  forEach,
  groupBy,
  reduce,
  some,
} from 'collection';

describe('COLLECTION TEST', () => {
  describe('forEach', () => {
    it('should be interatable with array-like collection', () => {
      const array = [1, 2, 3, 4];
      let count = 0;
      forEach(array, (value, index, arr) => {
        expect(value).toBe(array[count]);
        expect(count).toBe(index);
        expect(array).toBe(arr);
        count++;
      });
    });
    it('should be interatable with object', () => {
      const object = { a: 1, b: 2, c: 3 };
      forEach(object, (value, key, obj) => {
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

  describe('groupBy', () => {
    it('should be interatable with array-like collection', () => {
      const array = [1, 2, 3, 4];
      const results = groupBy(array, (value) => `group${value % 2}`);
      expect('group1' in results).toBe(true);
      expect(results.group1).toHaveLength(2);
    });
    it('should be interatable with object', () => {
      const object = { a: 1, b: 2, c: 3 };
      const results = groupBy(object, (value) => `group${value % 2}`);
      expect('group1' in results).toBe(true);
      expect(results.group1).toHaveLength(2);
    });
  });

  describe('filter', () => {
    it('should be interatable with array-like collection', () => {
      const array = [1, 2, 3, 4];
      const results = filter(array, (value) => value % 2 === 0);
      expect(results).toHaveLength(2);
      expect(results.includes(2)).toBe(true);
    });
    it('should be interatable with object', () => {
      const object = { a: 1, b: 2, c: 3 };
      const results = filter(object, (value) => value % 2 === 0);
      expect(results).toHaveLength(1);
      expect(results.includes(2)).toBe(true);
    });
  });

  describe('some', () => {
    it('should be interatable with array-like collection', () => {
      const array = [1, 2, 3, 4];
      expect(some(array, (value) => value % 2 === 0)).toBe(true);
      expect(some(array, (value) => value === 5)).toBe(false);
    });
    it('should be interatable with object', () => {
      const object = { a: 1, b: 2, c: 3 };
      expect(some(object, (value) => value % 2 === 0)).toBe(true);
      expect(some(object, (_, key) => key === 'd')).toBe(false);
    });
  });

  describe('every', () => {
    it('should be interatable with array-like collection', () => {
      const array = [1, 2, 3, 4];
      expect(every(array, (value) => value % 2 === 0)).toBe(false);
      expect(every(array, (value) => value < 5)).toBe(true);
    });
    it('should be interatable with object', () => {
      const object = { a: 1, b: 2, c: 3 };
      expect(every(object, (value) => value % 2 === 0)).toBe(false);
      expect(every(object, (_, key) => ['a', 'b', 'c'].includes(key))).toBe(
        true
      );
    });
  });

  describe('find', () => {
    it('should be interatable with array-like collection', () => {
      const arr = [1, 2, 13];
      expect(find(arr, (value) => value > 10)).toBe(13);
    });
    it('should be interatable with object', () => {
      const object = { a: 1, b: 2, c: 3 };
      expect(find(object, (_, key) => key === 'e')).toBe(undefined);
    });
  });

  describe('reduce', () => {
    it('should be interatable with array-like collection', () => {
      const arr = [1, 2, 3];
      expect(reduce(arr, (acc, value) => `${acc}_${value}`, '')).toBe(`_1_2_3`);
    });
    it('should be interatable with object', () => {
      const object = { a: 1, b: 2, c: 3 };
      expect(reduce(object, (acc, value, key) => acc + key + value, '')).toBe(
        'a1b2c3'
      );
    });
  });
});
