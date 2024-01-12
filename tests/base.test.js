import {
  typeOf,
  isArray,
  isArrayLike,
  isBlank,
  isBoolean,
  isDate,
  isDateLike,
  isElement,
  isEmpty,
  isEqual,
  isFunction,
  isMap,
  isNull,
  isNullish,
  isNumber,
  isObject,
  isObjectLike,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  isWeakMap,
  isWeakSet,
} from 'index';

describe('BASE TEST', () => {
  it('typeOf', () => {
    const types = {
      Boolean: true,
      String: '',
      Object: {},
      Array: [],
      Map: new Map(),
      Set: new Set(),
      Number: 0,
    };

    Object.entries(types).forEach(([type, value]) =>
      expect(typeOf(value)).toBe(type)
    );
  });

  it('isArray', () => {
    const map = new Map([
      [true, [new Array(), [1, 2, 3]]],
      [false, [1]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isArray(value)).toBe(bol));
    });
  });
  it('isArrayLike', () => {
    const map = new Map([
      [true, ['string', [1, 2, 3]]],
      [false, [1]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isArrayLike(value)).toBe(bol));
    });
  });
  it('isBlank', () => {
    const map = new Map([
      [true, ['', null]],
      [false, ['a']],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isBlank(value)).toBe(bol));
    });
  });
  it('isBoolean', () => {
    const map = new Map([
      [true, [true]],
      [false, ['true']],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isBoolean(value)).toBe(bol));
    });
  });
  it('isDate', () => {
    const map = new Map([
      [true, [new Date()]],
      [false, ['2024-01-01']],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isDate(value)).toBe(bol));
    });
  });
  it('isDateLike', () => {
    const map = new Map([
      [true, [new Date(), '2024-01-01', 10000000]],
      [false, ['string']],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isDateLike(value)).toBe(bol));
    });
  });
  it('isElement', () => {
    const map = new Map([[false, ['<div></div>']]]);
    map.forEach((values, bol) => {
      values.forEach((value) => expect(isElement(value)).toBe(bol));
    });
  });
  it('isEmpty', () => {
    const map = new Map([
      [true, [[], {}, new Set()]],
      [false, [false]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isEmpty(value)).toBe(bol));
    });
  });
  it('isEqual', () => {
    const obj = { a: 1 };
    expect(isEqual(obj, obj)).toBe(true);
    expect(isEqual(obj, { ...obj })).toBe(true);
  });
  it('isFunction', () => {
    const map = new Map([
      [true, [() => 0]],
      [false, [{}]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isFunction(value)).toBe(bol));
    });
  });
  it('isMap', () => {
    const map = new Map([
      [true, [new Map()]],
      [false, [{ a: 1, b: 2 }]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isMap(value)).toBe(bol));
    });
  });
  it('isNull', () => {
    const map = new Map([
      [true, [null]],
      [false, [true]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isNull(value)).toBe(bol));
    });
  });
  it('isNullish', () => {
    const map = new Map([
      [true, [null, undefined]],
      [false, [0]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isNullish(value)).toBe(bol));
    });
  });
  it('isNumber', () => {
    const map = new Map([
      [true, [123]],
      [false, ['123']],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isNumber(value)).toBe(bol));
    });
  });
  it('isObject', () => {
    const map = new Map([
      [true, [{}]],
      [false, [new Map(), 1]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isObject(value)).toBe(bol));
    });
  });
  it('isObjectLike', () => {
    const map = new Map([
      [true, [{}, () => false, []]],
      [false, [1]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isObjectLike(value)).toBe(bol));
    });
  });
  it('isSet', () => {
    const map = new Map([
      [true, [new Set()]],
      [false, [[1, 2, 3]]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isSet(value)).toBe(bol));
    });
  });
  it('isString', () => {
    const map = new Map([
      [true, ['is this string?']],
      [false, [0]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isString(value)).toBe(bol));
    });
  });
  it('isSymbol', () => {
    const map = new Map([
      [true, [Symbol('a')]],
      [false, ['a']],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isSymbol(value)).toBe(bol));
    });
  });
  it('isUndefined', () => {
    const map = new Map([
      [true, [undefined]],
      [false, [0]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isUndefined(value)).toBe(bol));
    });
  });
  it('isWeakMap', () => {
    const map = new Map([
      [true, [new WeakMap()]],
      [false, [new Map()]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isWeakMap(value)).toBe(bol));
    });
  });
  it('isWeakSet', () => {
    const map = new Map([
      [true, [new WeakSet()]],
      [false, [new Set()]],
    ]);

    map.forEach((values, bol) => {
      values.forEach((value) => expect(isWeakSet(value)).toBe(bol));
    });
  });
});
