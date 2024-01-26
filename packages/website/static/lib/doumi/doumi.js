// DOUMI v0.1.0
// https://github.com/janghye0k/doumi
// (c) 2024 - 2024 JangHyeok Kim
// Doumi may be freely distributed under the MIT license.

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
      ? define(['exports'], factory)
      : ((global =
          typeof globalThis !== 'undefined' ? globalThis : global || self),
        factory((global.doumi = {})));
})(this, function (exports) {
  'use strict';

  /**
   * Get Object.prototype.toString() type of value
   * @param {*} value
   * @returns {string}
   */
  var tagType = function tagType(value) {
    return Object.prototype.toString.call(value).slice('[object '.length, -1);
  };

  /**
   * @param {*} object The object (constructor) to used for comparison
   * @param {*} value The value to compare
   * @returns {boolean} Retruns `true` if the `value` is `object`, else `false`
   * @example
   *
   * is(String, 'str') // true
   * is(Boolean, true) // true
   * is(Boolean, 'true') // false
   */
  var is = function is(object, value) {
    return tagType(value) === object.name;
  };

  /**
   * Check value is array
   * @param {*} value The value to check
   * @returns {value is any[]} Retruns `true` if `value` is array, else `false`
   * @example
   *
   * isArray([1, 2, 3]) // true
   * isArray(new Array()) // true
   * isArray(1) // false
   */
  var isArray = function isArray(value) {
    return Array.isArray(value);
  };

  /**
   * Check value is array-like
   * @template {ArrayLike<any>} T
   * @param {*} value The value to check
   * @returns {value is T} Retruns `true` if `value` is array-like, else `false`
   * @example
   *
   * isArrayLike([1, 2, 3]) // true
   * isArrayLike('string') // true
   * isArrayLike(1) // false
   */
  var isArrayLike = function isArrayLike(value) {
    if (
      !value ||
      typeof value === 'function' ||
      typeof (value === null || value === void 0 ? void 0 : value.length) !==
        'number'
    )
      return false;
    return value.length > -1;
  };

  /**
   * Check value is null
   * @param {*} value The value to check
   * @returns {value is null} Retruns `true` if `value` is null, else `false`
   * @example
   *
   * isNull(null) // true
   * isNull(true) // false
   */
  var isNull = function isNull(value) {
    return value === null;
  };

  /**
   * Check value is undefined
   * @param {*} value The value to check
   * @returns {value is undefined} Retruns `true` if `value` is undefined, else `false`
   * @example
   *
   * isUndefined(undefined) // true
   * isUndefined(0) // false
   */
  var isUndefined = function isUndefined(value) {
    return value === undefined;
  };

  /**
   * Check value is nullish
   * @param {*} value The value to check
   * @returns {boolean} Retruns `true` if `value` is null or undefined, else `false`
   * @example
   *
   * isNullish(null) // true
   * isNullish(undefined) // true
   * isNullish(0) // false
   */
  var isNullish = function isNullish(value) {
    return isNull(value) || isUndefined(value);
  };

  /**
   * Check value is string
   * @param {*} value The value to check
   * @returns {value is string} Retruns `true` if `value` is string, else `false`
   * @example
   *
   * isString('is this string?') // true
   * isString(0) // false
   */
  var isString = function isString(value) {
    return typeof value === 'string' || tagType(value) === 'String';
  };

  /**
   * Check value is blank
   * @param {*} value The value to check
   * @returns {boolean} Retruns `true` if `value.length` is falsy, else `false`
   * @example
   *
   * isBlank('') // true
   * isBlank(undefined) // true
   * isBlank('a') // false
   */
  var isBlank = function isBlank(value) {
    return isString(value) ? value.length === 0 : isNullish(value);
  };

  /**
   * Check value is boolean
   * @param {*} value The value to check
   * @returns {value is boolean} Retruns `true` if `value` is boolean, else `false`
   * @example
   *
   * isBoolean(true) // true
   * isBoolean('true') // false
   */
  var isBoolean = function isBoolean(value) {
    return typeof value === 'boolean' || tagType(value) === 'Boolean';
  };

  /**
   * Check value is date
   * @param {*} value The value to check
   * @returns {value is Date} Retruns `true` if `value` is date, else `false`
   * @example
   *
   * isDate(new Date()) // true
   * isDate('2024-01-01') // false
   */
  var isDate = function isDate(value) {
    return tagType(value) === 'Date' && !isNaN(value);
  };

  /**
   * Check value is date-like
   * @param {*} value The value to check
   * @returns {boolean} Retruns `true` if `value` is date-like, else `false`
   * @example
   *
   * isDateLike(new Date()) // true
   * isDateLike('2024-01-01') // true
   * isDateLike(100000000) // true
   * isDateLike('string') // false
   */
  var isDateLike = function isDateLike(value) {
    if (!value) return false;
    return !isNaN(new Date(value));
  };

  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r &&
        (o = o.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })),
        t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2
        ? ownKeys(Object(t), !0).forEach(function (r) {
            _defineProperty(e, r, t[r]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : ownKeys(Object(t)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(t, r)
              );
            });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ('object' != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || 'default');
      if ('object' != typeof i) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, 'string');
    return 'symbol' == typeof i ? i : String(i);
  }
  function _typeof(o) {
    '@babel/helpers - typeof';

    return (
      (_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (o) {
              return typeof o;
            }
          : function (o) {
              return o &&
                'function' == typeof Symbol &&
                o.constructor === Symbol &&
                o !== Symbol.prototype
                ? 'symbol'
                : typeof o;
            }),
      _typeof(o)
    );
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) ||
      _iterableToArray(arr) ||
      _unsupportedIterableToArray(arr) ||
      _nonIterableSpread()
    );
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (
      (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
      iter['@@iterator'] != null
    )
      return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError(
      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it =
      (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
    if (!it) {
      if (
        Array.isArray(o) ||
        (it = _unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === 'number')
      ) {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length)
              return {
                done: true,
              };
            return {
              done: false,
              value: o[i++],
            };
          },
          e: function (e) {
            throw e;
          },
          f: F,
        };
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      },
    };
  }

  /**
   * Check value is object-like
   * @param {*} value The value to check
   * @returns {boolean} Retruns `true` if `value` is object-like, else `false`
   * @example
   *
   * isObject({}) // true
   * isObject(() => false) // true
   * isObject([]) // true
   * isObject(1) // false
   */
  var isObject = function isObject(value) {
    return (
      typeof value === 'function' || (_typeof(value) === 'object' && !!value)
    );
  };

  /**
   * Check value is element
   * @param {*} value The value to check
   * @returns {value is Element} Retruns `true` if `value` is element, else `false`
   * @example
   *
   * isElement(document.body) // true
   * isElement('<div></div>') // false
   */
  var isElement = function isElement(value) {
    return isObject(value) && value.nodeType === 1;
  };

  /**
   * Check value is Map
   * @param {*} value The value to check
   * @returns {boolean} Retruns `true` if `value` is Map, else `false`
   * @example
   *
   * isMap(new Map()) // true
   * isMap({ a: 1, b: 2 }) // false
   */
  var isMap = function isMap(value) {
    return isObject(value) && tagType(value) === 'Map';
  };

  /**
   * Check value is plain object
   * @param {*} value The value to check
   * @returns {boolean} Retruns `true` if `value` is plain object, else `false`
   * @example
   *
   * isPlainObject({}) // true
   * isPlainObject(new Map()) // false
   * isPlainObject(1) // false
   */
  var isPlainObject = function isPlainObject(value) {
    return (
      !!value && _typeof(value) === 'object' && tagType(value) === 'Object'
    );
  };

  /**
   * Check value is Set
   * @param {*} value The value to check
   * @returns {boolean} Retruns `true` if `value` is Set, else `false`
   * @example
   *
   * isSet(new Set()) // true
   * isSet([1, 2, 3]) // false
   */
  var isSet = function isSet(value) {
    return isObject(value) && tagType(value) === 'Set';
  };

  /**
   * Check value is empty
   * @param {*} value The value to check
   * @returns {boolean} Retruns `true` if `value` is empty, else `false`
   * @example
   *
   * isEmpty([]) // true
   * isEmpty({}) // true
   * isEmpty(new Set()) // true
   * isEmpty(false) // false
   */
  var isEmpty = function isEmpty(value) {
    if (isNullish(value)) return true;
    if (isArrayLike(value)) return !value.length;
    if (isMap(value) || isSet(value)) return !value.size;
    if (isPlainObject(value)) return !Object.keys(value).length;
    return false;
  };

  /**
   * Check value is function
   * @param {*} value The value to check
   * @returns {value is Function} Retruns `true` if `value` is function, else `false`
   * @example
   *
   * isFunction(() => null) // true
   * isFunction({}) // false
   */
  var isFunction = function isFunction(value) {
    return typeof value === 'function';
  };

  /**
   * Check values are equal
   * @param {*} value
   * @param {*} compare
   * @returns {boolean} Retruns `true` if the values are equal, else `false`
   * @example
   *
   * const obj = { a: 1 };
   *
   * isEqual(obj, obj) // true
   * isEqual(obj, {...obj}) // false
   */
  var isEqual = function isEqual(value, compare) {
    var valueType = tagType(value);
    if (valueType !== tagType(compare)) return false;
    if (isArrayLike(value)) {
      if (value.length !== compare.length) return false;
      for (var i = 0; i < value.length; i++) {
        if (!isEqual(value, compare)) return false;
      }
      return true;
    }
    if (isObject(value)) {
      if (
        isPlainObject(value) &&
        Object.keys(value).length !== Object.keys(compare).length
      )
        return false;
      for (var key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          if (!isEqual(value[key], compare[key])) return false;
        }
      }
      return true;
    }
    if (isFunction(value)) return value.toString() === compare.toString();
    return value === compare;
  };

  /**
   * Check value is Error
   * @param {*} value The value to check
   * @returns {value is Error} Retruns `true` if `value` is error, else `false`
   * @example
   *
   * isError(new Error()) // true
   * isError('error') // false
   */
  var isError = function isError(value) {
    return tagType(value) === 'Error';
  };

  /**
   * Check value is number
   * @param {*} value The value to check
   * @returns {value is number} Retruns `true` if `value` is number, else `false`
   * @example
   *
   * isNumber(123) // true
   * isNumber('123') // false
   */
  var isNumber = function isNumber(value) {
    return typeof value === 'number' || tagType(value) === 'Number';
  };

  /**
   * Check value is RegExp
   * @param {*} value The value to check
   * @returns {value is RegExp} Retruns `true` if `value` is RegExp, else `false`
   * @example
   *
   * isRegExp(/\d/gi) // true
   * isRegExp(new RegExp()) // true
   * isRegExp('d') // false
   */
  var isRegExp = function isRegExp(value) {
    return tagType(value) === 'RegExp';
  };

  /**
   * Check value is symbol
   * @param {*} value The value to check
   * @returns {value is symbol} Retruns `true` if `value` is symbol, else `false`
   * @example
   *
   * isSymbol(Symbol('a')) // true
   * isSymbol('a') // false
   */
  var isSymbol = function isSymbol(value) {
    return _typeof(value) === 'symbol' || tagType(value) === 'Symbol';
  };

  /**
   * Check value is WeakMap
   * @param {*} value The value to check
   * @returns {boolean} Retruns `true` if `value` is WeakMap, else `false`
   * @example
   *
   * isWeakMap(new WeakMap()) // true
   * isWeakMap(new Map()) // false
   */
  var isWeakMap = function isWeakMap(value) {
    return isObject(value) && tagType(value) === 'WeakMap';
  };

  /**
   * Check value is WeakSet
   * @param {*} value The value to check
   * @returns {boolean} Retruns `true` if `value` is WeakSet, else `false`
   * @example
   *
   * isWeakSet(new WeakSet()) // true
   * isWeakSet(new Set()) // false
   */
  var isWeakSet = function isWeakSet(value) {
    return isObject(value) && tagType(value) === 'WeakSet';
  };

  /**
   * Chunks an array into multiple arrays, each containing size or fewer items.
   * @template T
   * @param {T[]} array The array to process.
   * @param {number} size The length of each chunk
   * @returns {Array<T[]>} Returns new array of chunks
   * @example
   *
   * const array = [1, 2, 3, 4, 5, 6]
   * chunk(array, 2) // [[1, 2], [3, 4], [5, 6]]
   */
  var chunk = function chunk(array, size) {
    if (isNullish(size) || size < 1) return [];
    var resutls = [];
    var length = array.length;
    var i = 0;
    while (i < length) {
      resutls.push(array.slice(i, (i += size)));
    }
    return resutls;
  };

  var assign = Object.assign;

  /**
   * Create an array of a given object's own and inherited enumerable property names.
   * @template {string} T
   * @param {object} object The object to extract keys
   * @returns {T[]} Retruns the array of property names
   * @example
   *
   * keysIn({ a: 1, b: 2 }) // ['a', 'b']
   *
   * function Foo() {
   *  this.a = 1
   *  this.b = 2
   * }
   * Foo.prototype.c = 3
   * keysIn(new Foo()) // ['a', 'b', 'c']
   */
  var keysIn = function keysIn(object) {
    var keys = [];
    for (var key in object) {
      if (!isUndefined(key)) keys.push(key);
    }
    return keys;
  };

  /**
   * @param {object} object The object to merged
   * @param {...any} sources The source objects
   * @returns {any} Returns object
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   * Foo.prototype.c = 3;
   *
   * assignIn({ x: 'x' }, new Foo()) // { x: 'x', a: 1, b: 2, c: 3 }
   */

  function assignIn(object) {
    for (
      var _len = arguments.length,
        sources = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      sources[_key - 1] = arguments[_key];
    }
    sources.forEach(function (source) {
      if (!isObject(source)) return;
      keysIn(source).forEach(function (key) {
        object[key] = source[key];
      });
    });
    return object;
  }

  function splitObjectPath(paths) {
    var results = [];
    var splitByDot = paths.split('.');
    var _iterator = _createForOfIteratorHelper(splitByDot),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var splited = _step.value;
        if (!(splited !== null && splited !== void 0 && splited.length))
          continue;
        results.push.apply(
          results,
          _toConsumableArray(
            splited.split(/\[(.*?)\]/g).filter(function (item) {
              return item === null || item === void 0 ? void 0 : item.length;
            })
          )
        );
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return results;
  }

  /**
   * Get the value at paths of object
   * @template [T = any]
   * @param {object} object The object to query.
   * @param {string} paths The path of the property to get.
   * @returns {T | undefined} Returns the resolved value.
   * @example
   *
   * onst obj = { a: { b: [{}, { c: 3 }] } };
   * get(obj, 'a.b[1].c') // 3
   */
  var get = function get(object, paths) {
    var pointer = object;
    var splited = splitObjectPath(paths);
    var _iterator = _createForOfIteratorHelper(splited),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var item = _step.value;
        if (!isObject(pointer)) return undefined;
        pointer = pointer[item];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return pointer;
  };

  var numRegex = /\d/g;

  /**
   * Sets the value at path of object.
   * @param {object} object The object to modify.
   * @param {string} paths The path of the property to set.
   * @param {*} value The value to set
   * @example
   *
   * onst obj = { };
   * set(obj, 'a.b[1].c', 3) // { a: { b: [undefined, { c: 3 }] } }
   */
  var set = function set(object, paths, value) {
    var pointer = object;
    var items = splitObjectPath(paths);
    var size = items.length;
    for (var i = 0; i < size - 1; i++) {
      var item = items[i];
      var nextItem = items[i + 1];
      if (numRegex.test(nextItem)) {
        if (!isArray(pointer[item])) pointer[item] = [];
      } else {
        if (!isObject(pointer[item])) pointer[item] = {};
      }
      pointer = pointer[item];
    }
    pointer[items[size - 1]] = value;
  };

  /**
   * Checks if path is a direct property of object.
   * @param {object} object The object to query
   * @param {string} paths The path to check
   * @returns {boolean} Returns `true` if path exists, else `false`
   * @example
   *
   * const obj = { a: { b: c: 3 } }
   * has('a') // true
   * has('a.b.c') // true
   * has('a.b.d') // false
   */
  var has = function has(object, paths) {
    /** @type {any} */
    var pointer = object;
    var splited = splitObjectPath(paths);
    var size = splited.length;
    for (var i = 0; i < size - 1; i++) {
      var item = splited[i];
      if (!isObject(pointer)) return false;
      pointer = pointer[item];
    }
    if (!isObject(pointer)) return false;
    return splited[size - 1] in pointer;
  };

  /**
   * Create an array of a given object's own enumerable string-keyed property names.
   * @template {string} T
   * @param {object} object The object to extract keys
   * @returns {T[]} Retruns the array of property names
   * @example
   *
   * keys({ a: 1, b: 2 }) // ['a', 'b']
   *
   * function Foo() {
   *  this.a = 1
   *  this.b = 2
   * }
   * Foo.prototype.c = 3
   * keys(new Foo()) // ['a', 'b']
   */
  var keys = function keys(object) {
    return Object.keys(object);
  };

  /**
   * Create an array of a given object's own enumerable string-keyed property values.
   * @template {object} T
   * @template [V = any]
   * @param {T} object The object to extract values
   * @returns {V[]} Returns the array of property values.
   * @example
   *
   * const object = { a: 1, b: '2' }
   * const results = values(object) // [1, '2']
   */
  var values = function values(object) {
    return Object.values(object);
  };

  /**
   * Create an array of a given object's own and inherited enumerable string-keyed property values.
   * @template [T = any]
   * @param {object | Dictionary<T> | ArrayLike<T>} object The object to extract values
   * @returns {T[]} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1
   *   this.b = 2
   * }
   * Foo.prototype.c = 3
   * valuesIn(new Foo()) // [1, 2, 3]
   */
  var valuesIn = function valuesIn(object) {
    return /** @type {T[]} */ keysIn(object).map(function (key) {
      return object[key];
    });
  };

  /**
   * Create an array of a given object's own enumerable string-keyed property key-value pairs.
   * @template [V = any]
   * @template {string} [K = string]
   * @param {object | Dictionary<V> | ArrayLike<V>} object The object to extract entries
   * @returns {Array<[V, K]>} Returns the array of key-value pairs
   * @example
   *
   * const object = { a: 1, b: '2' }
   * const results = entries(object) // [['a', 1], ['b', '2']]
   */
  var entries = function entries(object) {
    return keys(object).map(function (key) {
      var value = object[key];
      return [value, key];
    });
  };

  /**
   * Create an array of a given object's own and inherited enumerable string-keyed property key-value pairs.
   * @template [V = any]
   * @template {string} [K = string]
   * @param {object | Dictionary<V> | ArrayLike<V>} object The object to extract entries
   * @returns {Array<[V, K]>} Returns the array of key-value pairs
   * @example
   *
   * function Foo() {
   *   this.a = 1
   *   this.b = 2
   * }
   * Foo.prototype.c = 3
   * const results = entriesIn(new Foo()) // [['a', 1], ['b', '2'], ['c', 3]]
   */
  var entriesIn = function entriesIn(object) {
    return keysIn(object).map(function (key) {
      var value = object[key];
      return [value, key];
    });
  };

  /**
   * Returns the key of the first element predicate
   * @template {object} T
   * @param {T} object The object to inspect.
   * @param {(value: any) => boolean} predicate The function invoked per iteration.
   * @returns {string | undefined} Returns the key of the matched element, else undefined.
   * @example
   *
   * const obj = {
   *   john: { class: 1, grade: 'A' },
   *   anna: { class: 3, grade: 'C' },
   *   smith: { class: 2, grade: 'B' },
   * };
   * findKey(obj, (o) => 'class' in o) // 'john'
   * findKey(obj, (o) => o.class === 3) // 'anna'
   */
  var findKey = function findKey(object, predicate) {
    var keyList = keys(object);
    var _iterator = _createForOfIteratorHelper(keyList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var key = _step.value;
        if (predicate(object[key])) return key;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  /**
   * Returns the key of the last element predicate
   * @template {object} T
   * @param {T} object The object to inspect.
   * @param {(value: any) => boolean} predicate The function invoked per iteration.
   * @returns {string | undefined} Returns the key of the matched element, else undefined.
   * @example
   *
   * const obj = {
   *   john: { class: 1, grade: 'A' },
   *   anna: { class: 3, grade: 'C' },
   *   smith: { class: 2, grade: 'B' },
   * };
   * findKey(obj, (o) => 'class' in o) // 'smith'
   * findKey(obj, (o) => o.class === 3) // 'anna'
   */
  var findLastKey = function findLastKey(object, predicate) {
    var keyList = keys(object);
    var size = keyList.length;
    for (var i = size - 1; i >= 0; i--) {
      var key = keyList[i];
      if (predicate(object[key])) return key;
    }
  };

  /**
   * Create object omitted by given keys
   * @template {object} T
   * @template {keyof T} K
   * @param {T} object
   * @param  {...K} keys The property keys to omit.
   * @returns {Omit<T, K>} Returns omitted object
   * @example
   *
   * const obj = { a: 1, b: 2, c: 3 }
   * omit(obj, 'a', 'c') // { b: 2 }
   */
  var omit = function omit(object) {
    for (
      var _len = arguments.length,
        keys = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      keys[_key - 1] = arguments[_key];
    }
    return keys.reduce(
      function (results, key) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        results[key];
        var ele = _objectWithoutProperties(results, [key].map(_toPropertyKey));
        return ele;
      },
      _objectSpread2({}, object)
    );
  };

  /**
   * Create object pickted by given keys
   * @template {object} T
   * @template {keyof T} K
   * @param {T} object
   * @param  {...K} keys The property keys to pick.
   * @returns {Pick<T, K>} Returns pickted object
   * @example
   *
   * const obj = { a: 1, b: 2, c: 3 }
   * pick(obj, 'a', 'c') // { a: 1, c: 3 }
   */
  var pick = function pick(object) {
    for (
      var _len = arguments.length,
        keys = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      keys[_key - 1] = arguments[_key];
    }
    return keys.reduce(function (results, key) {
      results[key] = object[key];
      return results;
    }, {});
  };

  /**
   * Checks if predicate returns truthy for all element of collection.
   * @template T
   * @param {T} collection The collection to iterate over.
   * @param {(value: any, index: any, collection: T) => boolean} predicate The function invoked per iteration.
   * @returns {boolean} Returns true if all elements pass the predicate check, else false.
   * @example
   *
   * const arr = [1, 2, 5]
   * every(arr, (value) => value < 10) // true
   *
   * const obj = { a: 1, b: 2 }
   * every(arr, (_, key) => key !== 'a') // false
   */

  function every(collection, predicate) {
    if (isArrayLike(collection)) {
      for (var i = 0; i < collection.length; i++) {
        if (!predicate(collection[i], i, collection)) return false;
      }
    } else if (isObject(collection)) {
      var keyList = keys(collection);
      var _iterator = _createForOfIteratorHelper(keyList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _key = _step.value;
          if (!predicate(collection[_key], _key, collection)) return false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return true;
  }

  /**
   * Iterates over elements of collection, returning an array of all elements predicate returns truthy for
   * @template T
   * @param {T} collection The collection to iterate over
   * @param {(value: any, index: any, collection: T) => void} predicate The function invoked per iteration
   * @returns {any[]} Returns the new filterd array
   * @example
   *
   * const arr = [1, 2, 3]
   * filter(arr, (value, index) => index === 1) // [1, 3]
   *
   * const obj = { a: 1, b: 'str' }
   * filter(obj, (value, key) => typeof value === 'string') // ['str']
   */

  function filter(collection, predicate) {
    var results = [];
    if (isArrayLike(collection)) {
      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection))
          results.push(collection[i]);
      }
    } else if (isObject(collection)) {
      var keyList = keys(collection);
      var _iterator = _createForOfIteratorHelper(keyList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _key = _step.value;
          if (predicate(collection[_key], _key, collection))
            results.push(collection[_key]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return results;
  }

  /**
   * Iterates over elements of collection, returning the first element predicate returns truthy for.
   * @template T
   * @param {T} collection The collection to iterate over.
   * @param {(value: any, index: any, collection: T) => boolean} predicate The function invoked per iteration.
   * @returns {boolean} Returns the matched element, else `undefined`.
   * @example
   *
   * const arr = [1, 2, 13]
   * find(arr, (value) => value > 10) // 13
   *
   * const obj = { a: 1, b: 2 }
   * find(arr, (_, key) => key === 'c') // undefined
   */

  function find(collection, predicate) {
    if (isArrayLike(collection)) {
      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) return collection[i];
      }
    } else if (isObject(collection)) {
      var keyList = keys(collection);
      var _iterator = _createForOfIteratorHelper(keyList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _key = _step.value;
          if (predicate(collection[_key], _key, collection))
            return collection[_key];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return undefined;
  }

  /**
   * Iterates over elements of collection and invokes iteratee for each element.
   * @template T
   * @param {T} collection The collection to iterate over.
   * @param {(value: any, index: any, collection: T) => void} callback The function invoked per iteration.
   * @example
   *
   * const arr = [1]
   * forEach(arr, (value, index) => console.log(value, index)) // 1, 0
   *
   * const obj = { a: 1 }
   * forEach(obj, (value, key) => console.log(value, key)) // 1, 'a'
   */

  function forEach(collection, callback) {
    if (isArrayLike(collection)) {
      for (var i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (isObject(collection)) {
      var keyList = keys(collection);
      var _iterator = _createForOfIteratorHelper(keyList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _key = _step.value;
          callback(collection[_key], _key, collection);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

  /**
   * Iterates over elements of collection and invokes iteratee for each element.
   * @template T
   * @param {T} collection The collection to iterate over.
   * @param {(value: any, index: any, collection: T) => void} callback The function invoked per iteration.
   * @example
   *
   * const arr = [1]
   * forEachRight(arr, (value, index) => console.log(value, index)) // 1, 0
   *
   * const obj = { a: 1 }
   * forEachRight(obj, (value, key) => console.log(value, key)) // 1, 'a'
   */

  function forEachRight(collection, callback) {
    if (isArrayLike(collection)) {
      for (var i = collection.length - 1; i >= 0; i -= 1) {
        callback(collection[i], i, collection);
      }
    } else if (isObject(collection)) {
      var keyList = keys(collection);
      for (var _i = keyList.length - 1; _i >= 0; _i -= 1) {
        var _key = keyList[_i];
        callback(collection[_key], _key, collection);
      }
    }
  }

  /**
   * Iterates over elements of collection and invokes iteratee for each element.
   * @template T
   * @param {T} collection The collection to iterate over.
   * @param {(value: any, index: any, collection: T) => string} callback The function invoked per iteration.
   * @returns {Record<string, any[]>} Returns new grouped array
   * @example
   *
   * const students = [
   *   { name: 'john', class: 'A', score: 100 },
   *   { name: 'alice', class: 'B', score: 91 },
   *   { name: 'smith', class: 'C', score: 65 },
   *   { name: 'gale', class: 'A', score: 74 },
   * ]
   *
   * const results = groupBy(students, (value) => value.score < 70 ? 'fail' : 'pass')
   * results.fail // [{ name: 'smith', class: 'C', score: 65 }]
   * results.pass.length // 3
   */

  function groupBy(collection, callback) {
    var resulst = {};
    if (isArrayLike(collection)) {
      for (var i = 0; i < collection.length; i++) {
        var groupKey = callback(collection[i], i, collection);
        if (!has(resulst, groupKey)) resulst[groupKey] = [collection[i]];
        else resulst[groupKey].push(collection[i]);
      }
    } else if (isObject(collection)) {
      var keyList = keys(collection);
      var _iterator = _createForOfIteratorHelper(keyList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _key = _step.value;
          var _groupKey = callback(collection[_key], _key, collection);
          if (!has(resulst, _groupKey)) resulst[_groupKey] = [collection[_key]];
          else resulst[_groupKey].push(collection[_key]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return resulst;
  }

  /**
   * Iterates over elements of collection and invokes iteratee for each element.
   * @template [T = any]
   * @template {Collection<any>} [O = Collection<any>]
   * @param {T} collection The collection to iterate over.
   * @param {(value: any, index: any, collection: O) => T} callback The function invoked per iteration.
   * @returns {T[]} Returns the new mapped array.
   * @example
   *
   * const arr = [1, 2, 3]
   * map(arr, (value, index) => value + index) // [1, 3, 5]
   *
   * const obj = { a: 1, b: 2, c: 3 }
   * map(obj, (value, key) => value + key) // ['a1', 'b2', 'c3']
   */

  function map(collection, callback) {
    var resulst = [];
    if (isArrayLike(collection)) {
      for (var i = 0; i < collection.length; i++) {
        resulst.push(callback(collection[i], i, collection));
      }
    } else if (isObject(collection)) {
      var keyList = keys(collection);
      var _iterator = _createForOfIteratorHelper(keyList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _key = _step.value;
          resulst.push(callback(collection[_key], _key, collection));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return resulst;
  }

  /**
   * Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
   *
   * The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the collection's first element is used as the initial value
   * @param {*} collection The collection to iterate over.
   * @param {(accumulator: any, value: any, index: any, collection: any) => any} reducer The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @returns {any} Returns the accumulated value.
   * @example
   *
   * const arr = [1, 2, 3]
   * reduce(arr, (acc, value) => `${acc}_${value}`, '') // '_1_2_3'
   */

  function reduce(collection, reducer, accumulator) {
    var results = accumulator;
    if (isArrayLike(collection)) {
      if (isUndefined(results)) results = collection[0];
      for (var i = 0; i < collection.length; i++) {
        results = reducer(results, collection[i], i, collection);
      }
    } else if (isObject(collection)) {
      var keyList = keys(collection);
      if (isUndefined(results)) results = collection[keyList[0]];
      var _iterator = _createForOfIteratorHelper(keyList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _key = _step.value;
          results = reducer(results, collection[_key], _key, collection);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return results;
  }

  /**
   * Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
   *
   * The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the collection's last element is used as the initial value
   * @param {*} collection The collection to iterate over.
   * @param {(accumulator: any, value: any, index: any, collection: any) => any} reducer The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @returns {any} Returns the accumulated value.
   * @example
   *
   * const arr = [1, 2, 3]
   * reduceRight(arr, (acc, value) => `${acc}_${value}`, '') // '_3_2_1'
   */

  function reduceRight(collection, reducer, accumulator) {
    var results = accumulator;
    if (isArrayLike(collection)) {
      var size = collection.length;
      if (isUndefined(results)) results = collection[size - 1];
      for (var i = size - 1; i >= 0; i -= 1) {
        results = reducer(results, collection[i], i, collection);
      }
    } else if (isObject(collection)) {
      var keyList = keys(collection);
      var _size = keyList.length;
      if (isUndefined(results)) results = collection[keyList[_size - 1]];
      for (var _i = _size - 1; _i >= 0; _i -= 1) {
        var _key = keyList[_i];
        results = reducer(results, collection[_key], _key, collection);
      }
    }
    return results;
  }

  /**
   * Checks if predicate returns truthy for any element of collection.
   * @template T
   * @param {T} collection The collection to iterate over.
   * @param {(value: any, index: any, collection: T) => boolean} predicate The function invoked per iteration.
   * @returns {boolean} Returns true if any element passes the predicate check, else false.
   * @example
   *
   * const arr = [1, 2, 13]
   * some(arr, (value) => value > 10) // true
   *
   * const obj = { a: 1, b: 2 }
   * some(arr, (_, key) => key === 'c') // false
   */

  function some(collection, predicate) {
    if (isArrayLike(collection)) {
      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) return true;
      }
    } else if (isObject(collection)) {
      var keyList = keys(collection);
      var _iterator = _createForOfIteratorHelper(keyList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _key = _step.value;
          if (predicate(collection[_key], _key, collection)) return true;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return false;
  }

  /**
   * Creates an array of array values not included in the other given arrays. The order and references of result values are determined by the first array.
   * @template T
   * @param {T[]} array The array to inspect.
   * @param {T[][] | [...T[][], (value: T, index: number) => any]} other The values to exclude.
   * @param [transformer] The transformer invoked per element for comparison.
   * @returns {T[]}
   * @example
   *
   * const arr = [1, 2, 3, 4, 5]
   * const other = [3, 5, 6]
   * difference(arr, other) // [1, 2, 4]
   */
  function difference(array) {
    var o = [];
    var transformer = function transformer(v) {
      return v;
    };
    for (
      var _len = arguments.length,
        other = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      other[_key - 1] = arguments[_key];
    }
    var lastItem = other.at(-1);
    if (isFunction(lastItem)) {
      transformer = lastItem;
      o = other.slice(0, -1).flat();
    } else o = other.flat();
    var comapre = map(o, transformer);
    return filter(array, function (value, index) {
      return !comapre.includes(transformer(value, index));
    });
  }

  /**
   * Creates an array of values that are included in all given arrays. The order and references of result values are determined by the first array.
   * @template T
   * @param {T[]} array The array to inspect.
   * @param {T[][] | [...T[][], (value: T, index: number) => any]} other The values to exclude.
   * @param [transformer] The transformer invoked per element for comparison.
   * @returns {T[]}
   * @example
   *
   * const arr = [1, 2, 3, 4, 5]
   * const other = [3, 5, 6]
   * intersection(arr, other) // [1, 2, 4]
   */
  function intersection(array) {
    var transformer = function transformer(v) {
      return v;
    };
    for (
      var _len = arguments.length,
        other = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      other[_key - 1] = arguments[_key];
    }
    var lastItem = other.at(-1);
    var o = other;
    if (isFunction(lastItem)) {
      transformer = lastItem;
      o = other.slice(0, -1);
    }
    return filter(array, function (value, index) {
      var converted = transformer(value, index);
      return o.every(function (arr) {
        return some(arr, function (item, i) {
          return transformer(item, i) == converted;
        });
      });
    });
  }

  /**
   * A function to create numbered lists of integers,
   * @param size The size of array
   * @param start The start index of array, if `arguments.length === 0`, array started at 0 index
   * @returns {number[]} Returns `size` length array, started at `start`
   * @example
   *
   * range(5) // [0, 1, 2, 3, 4]
   * range(3, 4) // [3, 4, 5, 6]
   */

  function range() {
    var arr = [];
    var std, end;
    if (arguments.length !== 1) {
      std = arguments.length <= 0 ? undefined : arguments[0];
      end = std + (arguments.length <= 1 ? undefined : arguments[1]);
    } else (std = 0), (end = arguments.length <= 0 ? undefined : arguments[0]);
    for (var i = std; i < end; i++) arr.push(i);
    return arr;
  }

  /**
   * Creates an array of shuffled values, using knuth shuffle
   * @template T
   * @param {T[]} array The array to query
   * @returns {T[]} Returns the new shuffled array.
   */
  var shuffle = function shuffle(array) {
    return array.sort(function () {
      return 0.5 - Math.random();
    });
  };

  /**
   * Returns the first `Element` within the document that matches the specified selector, or group of selectors. If no matches are found, `null` is returned.
   * @template {Element} [T = HTMLElement]
   * @param {string} selector A string containing one or more selectors to match.
   * @param {Element} [element] The target element to find selector
   * @returns {T | null}
   */
  function find$(selector, element) {
    var $el = isElement(element) ? element : document;
    return $el.querySelector(selector);
  }

  /**
   * Returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
   * @template {Element} [T = HTMLElement]
   * @param {string} selector A string containing one or more selectors to match.
   * @param {Element} [element] The target element to find selector
   * @returns {NodeListOf<T>} A non-live `NodeList` containing one `Element` object for each element that matches at least one of the specified selectors or an empty `NodeList` in case of no matches.
   */
  function findAll$(selector, element) {
    var $el = isElement(element) ? element : document;
    return $el.querySelectorAll(selector);
  }

  /**
   * Bind event listener
   * @template {keyof HTMLElementEventMap} K
   * @template {Element} [T = HTMLElement]
   * @param {T} element The element to bind event
   * @param {K} eventType A case-sensitive string representing the event type to listen for.
   * @param {EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
   * @param {AddEventListenerOptions} [options] An object that specifies characteristics about the event listener. If `true`, allows you to take advantage of event bubbling for events that otherwise don’t support it.
   */
  var on = function on(element, eventType, listener, options) {
    return element.addEventListener(eventType, listener, options);
  };

  /**
   * Unbind event listener
   * @template {keyof HTMLElementEventMap} K
   * @template {Element} [T = HTMLElement]
   * @param {T} element The element to unbind event
   * @param {K} eventType A case-sensitive string representing the event type to listen for.
   * @param {EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
   */
  var off = function off(element, eventType, listener) {
    return element.removeEventListener(eventType, listener);
  };

  /**
   * Callback function that determine whether to fire an event listener
   * @callback BindCondition
   * @param {Element} parent The parent element where the event is actually registered
   * @param {Element} target The selector element on which to fire the event.
   * @returns {boolean} Whether to fire an event
   */

  /**
   * Function to pre-register events for elements whose existence is uncertain by registering events on the parent element.
   * @template {MouseEventKeys} K
   * @template {Element} [T = HTMLElement]
   * @param {Element} $element Parent element
   * @param {K} eventType Event type to listen for. It should be of the mouse event type
   * @param {string} selector A string containing one or more selectors to match.
   * @param {import('./index').EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
   * @param {BindCondition} [condition] Callback function that determine whether to fire an event listener
   */
  function bind$($element, eventType, selector, listener, condition) {
    var children = Array.from(findAll$(selector, $element));
    var EvtClass;
    var findCurrentTarget = function findCurrentTarget(target) {
      var $el =
        target === null || target === void 0
          ? void 0
          : target.closest(selector);
      if (!$el) children.includes(target) ? target : null;
      return $el;
    };
    on($element, eventType, function (event) {
      if (!EvtClass) {
        if (eventType === 'wheel') EvtClass = WheelEvent;
        else if (tagType(event) === 'PointerEvent') EvtClass = PointerEvent;
        else EvtClass = MouseEvent;
      }
      var $currentTarget = findCurrentTarget(event.target);
      if (!$currentTarget) return false;
      if (
        typeof condition === 'function' &&
        !condition($element, $currentTarget)
      )
        return false;
      var e = new EvtClass(eventType, event);
      ['target', 'currentTarget'].forEach(function (item) {
        return Object.defineProperty(e, item, {
          value: $currentTarget,
          configurable: true,
        });
      });
      listener.call($currentTarget, e);
    });
  }

  var _excluded = ['id', 'className', 'classList', 'role', 'style', 'dataset'];
  /**
   * Create Element
   * @template {keyof HTMLElementTagNameMap} K
   * @template [T = HTMLElementTagNameMap[K]]
   * @param {K} tagName The tag name of element
   * @param {CreateOptions<T>} options The element options
   */
  function create$(tagName) {
    var _$el$classList;
    var options =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var $el = document.createElement(tagName);
    var id = options.id,
      className = options.className,
      classList = options.classList,
      role = options.role,
      style = options.style,
      dataset = options.dataset,
      props = _objectWithoutProperties(options, _excluded);
    if (id) $el.id = id;
    if (className) $el.classList.add(className);
    if (Array.isArray(classList))
      (_$el$classList = $el.classList).add.apply(
        _$el$classList,
        _toConsumableArray(classList)
      );
    if (role) $el.role = role;
    if (style && tagType(style) === 'Object') {
      for (var key in style) {
        var value = style[key];
        if (value === undefined) continue;
        $el.style[key] = value;
      }
    }
    if (tagType(dataset) === 'Object') {
      for (var _key in dataset) {
        var _value = dataset[_key];
        if (_value === undefined) continue;
        $el.dataset[_key] = ''.concat(_value);
      }
    }
    if (tagType(props) === 'Object') {
      for (var _key2 in props) {
        var _value2 = props[_key2];
        if (_value2 === undefined) continue;
        $el[_key2] = _value2;
      }
    }
    return $el;
  }

  /**
   * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
   *
   * The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them.
   * @param {Function} func The function to debounce.
   * @param {number} wait The number of milliseconds to delay
   * @param {boolean} [immediate] If immediate is `true`, the argument `func` will be triggered at the beginning of the sequence instead of at the end.
   * @returns {Function} Returns debounce function. You can cancel debounce using `debounced.cancel`
   */
  function debounce(func, wait) {
    var immediate =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var timeout = null;
    var result;
    var args;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(void 0, _toConsumableArray(args));
      }
      if (!timeout) args = null;
    };
    var debounced = assign(
      function () {
        for (
          var _len = arguments.length, params = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          params[_key] = arguments[_key];
        }
        args = params;
        var callNow = immediate && !timeout;
        if (timeout) clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);
        if (callNow) {
          result = func.apply(void 0, _toConsumableArray(args));
        }
        return result;
      },
      {
        cancel: function cancel() {
          if (timeout) clearTimeout(timeout);
          timeout = null;
        },
      }
    );
    return debounced;
  }

  /**
   * Trigger delay
   * @param {number} wait The number of milliseconds to delay
   */
  var sleep = function sleep(wait) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, wait);
    });
  };

  var now = function now() {
    return new Date().getTime();
  };

  /**
   *Creates a throttled function that only invokes func at most once per every wait milliseconds. 
   
   The throttled function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them.
   * @param {Function} func The function to throttle.
   * @param {number} wait The number of milliseconds to delay
   * @param {ThrottleOptions} [options] The options object.
   * @param {boolean} [options.leading] Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing] Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns throttled function. You can cancel throttle using `throttled.cancel`
   */
  function throttle(func, wait) {
    var options =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var timeout;
    var result;
    var args;
    var previous = 0;
    if (!options) options = {};
    var later = function later() {
      previous = options.leading === false ? 0 : now();
      timeout = null;
      result = func.apply(void 0, _toConsumableArray(args));
      if (!timeout) args = null;
    };
    var throttled = assign(
      function () {
        var _now = now();
        if (!previous && options.leading === false) previous = _now;
        var remaining = wait - (_now - previous);
        for (
          var _len = arguments.length, params = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          params[_key] = arguments[_key];
        }
        args = params;
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = _now;
          result = func.apply(void 0, _toConsumableArray(args));
          if (!timeout) args = null;
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      },
      {
        cancel: function cancel() {
          if (timeout) clearTimeout(timeout);
          previous = 0;
          timeout = args = null;
        },
      }
    );
    return throttled;
  }

  /**
   * Computes the sum of the values
   * @param {number[]} values
   * @returns {number}
   * @example
   *
   * sum([1, 2, 3]) // 6
   */
  function sum(values) {
    return reduce(
      values,
      function (sum, value) {
        return sum + value;
      },
      0
    );
  }

  /**
   * Computes the average of the values
   * @param {number[]} values
   * @returns {number}
   * @example
   *
   * average([1, 2, 3]) // 2
   */
  function average(values) {
    var size = values.length;
    if (size === 0) return 0;
    return sum(values) / size;
  }

  /**
   * Checks if n is between start and up to end
   * @param {number} number The number to check.
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @returns {boolean} Returns `true` if number is in the range, else `false`.
   * @example
   *
   * between(3, 1, 5) // true
   * between(8, 1, 5) // false
   */
  function between(number, start, end) {
    return number >= start && number <= end;
  }

  /**
   * Clamp number
   * @param {number} number The number to clamp
   * @param {number} lower The lower bound
   * @param {number} upper The upper bound
   * @returns {number} Returns the clamped number
   * @example
   *
   * clamp(3, 1, 5) // 3
   * clamp(8, 1, 5) // 5
   */
  function clamp(number, lower, upper) {
    return number < lower ? lower : number > upper ? upper : number;
  }

  /**
   * Converts string to camel case. https://developer.mozilla.org/en-US/docs/Glossary/Camel_case
   * @param {string} str The string to convert.
   * @returns {string} Returns the camel cased string.
   * @example
   *
   * camelCase('foo bar') // 'fooBar'
   * camelCase('foo-bar') // 'fooBar'
   * camelCase('FOO__bar') // 'fooBar'
   */
  function camelCase() {
    var str =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (m, chr) {
      return chr.toUpperCase();
    });
  }

  /**
   * Converts the first character of string to upper case and the remaining to lower case
   * @param {string} str The string to capitalize
   * @returns {string} Retruns the capitalized string
   * @example
   *
   * capitalize('HELLO') // 'Hello'
   */
  var capitalize = function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  /**
   * Convert string to kebab case. https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case
   * @param {string} str The string to convert.
   * @returns {string} Returns the kebab cased string.
   * @example
   *
   * kebabCase('foo bar') // 'foo-bar'
   * kebabCase('foo-bar') // 'foo-bar'
   * kebabCase('FOO__ bar') // 'foo-bar'
   */
  function kebabCase(str) {
    return str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .join('-')
      .toLowerCase();
  }

  /**
   * Convert string to camel case, but the first character of string to upper case
   * @param {string} str The string to convert.
   * @returns {string} Returns the pascal cased string.
   * @example
   *
   * camelCase('foo bar') // 'FooBar'
   * camelCase('foo-bar') // 'FooBar'
   * camelCase('FOO__bar') // 'FooBar'
   */
  function pascalCase(str) {
    var camel = camelCase(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
  }

  /**
   * Convert string to snake case. https://developer.mozilla.org/en-US/docs/Glossary/Snake_case
   * @param {string} str The string to convert.
   * @returns {string} Returns the snake cased string.
   * @example
   *
   * snakeCase('foo bar') // 'foo_bar'
   * snakeCase('foo-bar') // 'foo_bar'
   * snakeCase('FOO__ bar') // 'foo_bar'
   */
  function snakeCase(str) {
    return str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .join('_')
      .toLowerCase();
  }

  exports.assign = assign;
  exports.assignIn = assignIn;
  exports.average = average;
  exports.between = between;
  exports.bind$ = bind$;
  exports.camelCase = camelCase;
  exports.capitalize = capitalize;
  exports.chunk = chunk;
  exports.clamp = clamp;
  exports.create$ = create$;
  exports.debounce = debounce;
  exports.difference = difference;
  exports.entries = entries;
  exports.entriesIn = entriesIn;
  exports.every = every;
  exports.filter = filter;
  exports.find = find;
  exports.find$ = find$;
  exports.findAll$ = findAll$;
  exports.findKey = findKey;
  exports.findLastKey = findLastKey;
  exports.forEach = forEach;
  exports.forEachRight = forEachRight;
  exports.get = get;
  exports.groupBy = groupBy;
  exports.has = has;
  exports.intersection = intersection;
  exports.is = is;
  exports.isArray = isArray;
  exports.isArrayLike = isArrayLike;
  exports.isBlank = isBlank;
  exports.isBoolean = isBoolean;
  exports.isDate = isDate;
  exports.isDateLike = isDateLike;
  exports.isElement = isElement;
  exports.isEmpty = isEmpty;
  exports.isEqual = isEqual;
  exports.isError = isError;
  exports.isFunction = isFunction;
  exports.isMap = isMap;
  exports.isNull = isNull;
  exports.isNullish = isNullish;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isPlainObject = isPlainObject;
  exports.isRegExp = isRegExp;
  exports.isSet = isSet;
  exports.isString = isString;
  exports.isSymbol = isSymbol;
  exports.isUndefined = isUndefined;
  exports.isWeakMap = isWeakMap;
  exports.isWeakSet = isWeakSet;
  exports.kebabCase = kebabCase;
  exports.keys = keys;
  exports.keysIn = keysIn;
  exports.map = map;
  exports.off = off;
  exports.omit = omit;
  exports.on = on;
  exports.pascalCase = pascalCase;
  exports.pick = pick;
  exports.range = range;
  exports.reduce = reduce;
  exports.reduceRight = reduceRight;
  exports.set = set;
  exports.shuffle = shuffle;
  exports.sleep = sleep;
  exports.snakeCase = snakeCase;
  exports.some = some;
  exports.sum = sum;
  exports.tagType = tagType;
  exports.throttle = throttle;
  exports.values = values;
  exports.valuesIn = valuesIn;
});
