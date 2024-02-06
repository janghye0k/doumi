import {
  assignIn,
  entries,
  entriesIn,
  findKey,
  findLastKey,
  get,
  has,
  keys,
  keysIn,
  set,
  omit,
  pick,
  values,
  valuesIn,
} from 'object';

function Foo() {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;

describe('OBJECT TEST', () => {
  describe('assignIn', () => {
    it('should be assign prototype properties', () => {
      const obj = assignIn({ x: 'x' }, new Foo());
      expect(obj['c']).toBe(3);
    });
  });

  describe('get', () => {
    const obj = { a: { b: [{}, { c: 3 }] } };
    const pkg = { exports: { '.': { import: 'file' } } };
    it('should be return given paths value', () => {
      expect(get(obj, 'a.b[1].c')).toBe(3);
      expect(get(pkg, 'exports["."].import')).toBe('file');
    });
    it('should return an undefined when an invalid path is provided', () => {
      expect(get(obj, 'a.b[1].d.e')).toBe(undefined);
      expect(get(pkg, 'exports["."].empty')).toBe(undefined);
    });
  });

  describe('set', () => {
    const results = { a: { b: [{}, { c: 3 }] } };
    const obj = {};
    const pkg = {};
    it('should set the value at the given path.', () => {
      set(results, 'a.b[0]', undefined);
      expect(results.a.b[0]).toBe(undefined);
      set(pkg, 'exports["."].import', 'file');
      expect(pkg.exports['.'].import).toBe('file');
    });
    it('not initialized value of created array should be undefined', () => {
      set(obj, 'a.b[1].c', 3);
      expect(JSON.stringify(obj)).toBe(JSON.stringify(results));
    });
    it('can be set minus index value', () => {
      set(obj, 'arr[-3]', 10);
      expect(obj.arr.at(-3)).toBe(10);
      expect(obj.arr.length).toBe(3);
    });
  });

  describe('has', () => {
    const obj = { a: { b: [{}, { c: 3 }] } };
    const pkg = { exports: { '.': { import: 'file' } } };
    it('should be check given paths is exist', () => {
      expect(has(obj, 'a.b[1].c')).toBe(true);
      expect(has(obj, 'a.b[1].d.e')).toBe(false);
      expect(has(pkg, 'exports["."].import')).toBe(true);
    });
  });

  describe('find', () => {
    const obj = {
      john: { class: 1, grade: 'A' },
      anna: { class: 3, grade: 'C' },
      smith: { class: 2, grade: 'B' },
    };
    it('`findKey` should be returns first matched element', () => {
      expect(findKey(obj, (o) => typeof o.class === 'number')).toBe('john');
    });
    it('`findLastKey` should be returns last matched element', () => {
      expect(findLastKey(obj, (o) => typeof o.class === 'number')).toBe(
        'smith'
      );
    });
  });

  it('keys', () => {
    const results = keys(new Foo());
    expect(results).toHaveLength(2);
    expect(typeof results[0]).toBe('string');
  });
  it('keysIn', () => {
    const results = keysIn(new Foo());
    expect(results).toHaveLength(3);
    expect(typeof results[0]).toBe('string');
  });

  it('values', () => {
    const results = values(new Foo());
    expect(results).toHaveLength(2);
    expect(typeof results[0]).toBe('number');
  });
  it('valuesIn', () => {
    const results = valuesIn(new Foo());
    expect(results).toHaveLength(3);
    expect(typeof results[0]).toBe('number');
  });
  it('entries', () => {
    const results = entries(new Foo());
    expect(results).toHaveLength(2);
    expect(typeof results[0][0]).toBe('number');
    expect(typeof results[0][1]).toBe('string');
  });
  it('entriesIn', () => {
    const results = entriesIn(new Foo());
    expect(results).toHaveLength(3);
    expect(typeof results[0][0]).toBe('number');
    expect(typeof results[0][1]).toBe('string');
  });

  it('omit', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(JSON.stringify(omit(obj, 'a', 'c'))).toBe(JSON.stringify({ b: 2 }));
  });
  it('pick', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(JSON.stringify(pick(obj, 'a', 'c'))).toBe(
      JSON.stringify({ a: 1, c: 3 })
    );
  });
});
