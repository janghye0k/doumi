// DOUMI v0.1.0
// https://github.com/janghye0k/doumi
// (c) 2024 - 2024 JangHyeok Kim
// Doumi may be freely distributed under the MIT license.

'use strict';

var tagType = function tagType(value) {
  return Object.prototype.toString.call(value).slice('[object '.length, -1);
};

var is = function is(object, value) {
  return tagType(value) === object.name;
};

var isArray = function isArray(value) {
  return Array.isArray(value);
};

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

var isNull = function isNull(value) {
  return value === null;
};

var isUndefined = function isUndefined(value) {
  return value === undefined;
};

var isNullish = function isNullish(value) {
  return isNull(value) || isUndefined(value);
};

var isString = function isString(value) {
  return typeof value === 'string' || tagType(value) === 'String';
};

var isBlank = function isBlank(value) {
  return isString(value) ? value.length === 0 : isNullish(value);
};

var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean' || tagType(value) === 'Boolean';
};

var isDate = function isDate(value) {
  return tagType(value) === 'Date' && !isNaN(value);
};

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
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
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

var isObject = function isObject(value) {
  return (
    typeof value === 'function' || (_typeof(value) === 'object' && !!value)
  );
};

var isElement = function isElement(value) {
  return isObject(value) && value.nodeType === 1;
};

var isMap = function isMap(value) {
  return isObject(value) && tagType(value) === 'Map';
};

var isPlainObject = function isPlainObject(value) {
  return !!value && _typeof(value) === 'object' && tagType(value) === 'Object';
};

var isSet = function isSet(value) {
  return isObject(value) && tagType(value) === 'Set';
};

var isEmpty = function isEmpty(value) {
  if (isNullish(value)) return true;
  if (isArrayLike(value)) return !value.length;
  if (isMap(value) || isSet(value)) return !value.size;
  if (isPlainObject(value)) return !Object.keys(value).length;
  return false;
};

var isFunction = function isFunction(value) {
  return typeof value === 'function';
};

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

var isError = function isError(value) {
  return tagType(value) === 'Error';
};

var isNumber = function isNumber(value) {
  return typeof value === 'number' || tagType(value) === 'Number';
};

var isRegExp = function isRegExp(value) {
  return tagType(value) === 'RegExp';
};

var isSymbol = function isSymbol(value) {
  return _typeof(value) === 'symbol' || tagType(value) === 'Symbol';
};

var isWeakMap = function isWeakMap(value) {
  return isObject(value) && tagType(value) === 'WeakMap';
};

var isWeakSet = function isWeakSet(value) {
  return isObject(value) && tagType(value) === 'WeakSet';
};

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

var keysIn = function keysIn(object) {
  var keys = [];
  for (var key in object) {
    if (!isUndefined(key)) keys.push(key);
  }
  return keys;
};

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
      if (!(splited !== null && splited !== void 0 && splited.length)) continue;
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

var has = function has(object, paths) {
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

var keys = function keys(object) {
  return Object.keys(object);
};

var values = function values(object) {
  return Object.values(object);
};

var valuesIn = function valuesIn(object) {
  return keysIn(object).map(function (key) {
    return object[key];
  });
};

var entries = function entries(object) {
  return keys(object).map(function (key) {
    var value = object[key];
    return [value, key];
  });
};

var entriesIn = function entriesIn(object) {
  return keysIn(object).map(function (key) {
    var value = object[key];
    return [value, key];
  });
};

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

var findLastKey = function findLastKey(object, predicate) {
  var keyList = keys(object);
  var size = keyList.length;
  for (var i = size - 1; i >= 0; i--) {
    var key = keyList[i];
    if (predicate(object[key])) return key;
  }
};

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
      results[key];
      var ele = _objectWithoutProperties(results, [key].map(_toPropertyKey));
      return ele;
    },
    _objectSpread2({}, object)
  );
};

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

function filter(collection, predicate) {
  var results = [];
  if (isArrayLike(collection)) {
    for (var i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) results.push(collection[i]);
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

var shuffle = function shuffle(array) {
  return array.sort(function () {
    return 0.5 - Math.random();
  });
};

function find$(selector, element) {
  var $el = isElement(element) ? element : document;
  return $el.querySelector(selector);
}

function findAll$(selector, element) {
  var $el = isElement(element) ? element : document;
  return $el.querySelectorAll(selector);
}

var on = function on(element, eventType, listener, options) {
  return element.addEventListener(eventType, listener, options);
};

var off = function off(element, eventType, listener) {
  return element.removeEventListener(eventType, listener);
};

function bind$($element, eventType, selector, listener, condition) {
  var children = Array.from(findAll$(selector, $element));
  var EvtClass;
  var findCurrentTarget = function findCurrentTarget(target) {
    var $el =
      target === null || target === void 0 ? void 0 : target.closest(selector);
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
    if (typeof condition === 'function' && !condition($element, $currentTarget))
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
  if (tagType(dataset) === 'Object') {
    for (var _key2 in props) {
      var _value2 = props[_key2];
      if (_value2 === undefined) continue;
      $el[_key2] = _value2;
    }
  }
  return $el;
}

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

var sleep = function sleep(wait) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, wait);
  });
};

var now = function now() {
  return new Date().getTime();
};
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

function sum(values) {
  return reduce(
    values,
    function (sum, value) {
      return sum + value;
    },
    0
  );
}

function average(values) {
  var size = values.length;
  if (size === 0) return 0;
  return sum(values) / size;
}

function between(number, start, end) {
  return number >= start && number <= end;
}

function clamp(number, lower, upper) {
  return number < lower ? lower : number > upper ? upper : number;
}

function camelCase() {
  var str =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (m, chr) {
    return chr.toUpperCase();
  });
}

var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

function kebabCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase();
}

function pascalCase(str) {
  var camel = camelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function snakeCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
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
