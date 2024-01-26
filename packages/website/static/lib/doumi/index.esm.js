// DOUMI v0.1.0
// https://github.com/janghye0k/doumi
// (c) 2024 - 2024 JangHyeok Kim
// Doumi may be freely distributed under the MIT license.

const tagType = (value) =>
  Object.prototype.toString.call(value).slice(`[object `.length, -1);

const is = (object, value) => tagType(value) === object.name;

const isArray = (value) => Array.isArray(value);

const isArrayLike = (value) => {
  if (
    !value ||
    typeof value === 'function' ||
    typeof (value == null ? void 0 : value.length) !== 'number'
  )
    return false;
  return value.length > -1;
};

const isNull = (value) => value === null;

const isUndefined = (value) => value === void 0;

const isNullish = (value) => isNull(value) || isUndefined(value);

const isString = (value) =>
  typeof value === 'string' || tagType(value) === 'String';

const isBlank = (value) =>
  isString(value) ? value.length === 0 : isNullish(value);

const isBoolean = (value) =>
  typeof value === 'boolean' || tagType(value) === 'Boolean';

const isDate = (value) => tagType(value) === 'Date' && !isNaN(value);

const isDateLike = (value) => {
  if (!value) return false;
  return !isNaN(new Date(value));
};

const isObject = (value) => {
  return typeof value === 'function' || (typeof value === 'object' && !!value);
};

const isElement = (value) => isObject(value) && value.nodeType === 1;

const isMap = (value) => isObject(value) && tagType(value) === 'Map';

const isPlainObject = (value) => {
  return !!value && typeof value === 'object' && tagType(value) === 'Object';
};

const isSet = (value) => isObject(value) && tagType(value) === 'Set';

const isEmpty = (value) => {
  if (isNullish(value)) return true;
  if (isArrayLike(value)) return !value.length;
  if (isMap(value) || isSet(value)) return !value.size;
  if (isPlainObject(value)) return !Object.keys(value).length;
  return false;
};

const isFunction = (value) => typeof value === 'function';

const isEqual = (value, compare) => {
  const valueType = tagType(value);
  if (valueType !== tagType(compare)) return false;
  if (isArrayLike(value)) {
    if (value.length !== compare.length) return false;
    for (let i = 0; i < value.length; i++) {
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
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        if (!isEqual(value[key], compare[key])) return false;
      }
    }
    return true;
  }
  if (isFunction(value)) return value.toString() === compare.toString();
  return value === compare;
};

const isError = (value) => tagType(value) === 'Error';

const isNumber = (value) =>
  typeof value === 'number' || tagType(value) === 'Number';

const isRegExp = (value) => tagType(value) === 'RegExp';

const isSymbol = (value) =>
  typeof value === 'symbol' || tagType(value) === 'Symbol';

const isWeakMap = (value) => isObject(value) && tagType(value) === 'WeakMap';

const isWeakSet = (value) => isObject(value) && tagType(value) === 'WeakSet';

const chunk = (array, size) => {
  if (isNullish(size) || size < 1) return [];
  const resutls = [];
  const length = array.length;
  let i = 0;
  while (i < length) {
    resutls.push(array.slice(i, (i += size)));
  }
  return resutls;
};

const assign = Object.assign;

const keysIn = (object) => {
  const keys = [];
  for (const key in object) {
    if (!isUndefined(key)) keys.push(key);
  }
  return keys;
};

function assignIn(object, ...sources) {
  sources.forEach((source) => {
    if (!isObject(source)) return;
    keysIn(source).forEach((key) => {
      object[key] = source[key];
    });
  });
  return object;
}

function splitObjectPath(paths) {
  const results = [];
  const splitByDot = paths.split('.');
  for (const splited of splitByDot) {
    if (!(splited == null ? void 0 : splited.length)) continue;
    results.push(
      ...splited
        .split(/\[(.*?)\]/g)
        .filter((item) => (item == null ? void 0 : item.length))
    );
  }
  return results;
}

const get = (object, paths) => {
  let pointer = object;
  const splited = splitObjectPath(paths);
  for (const item of splited) {
    if (!isObject(pointer)) return void 0;
    pointer = pointer[item];
  }
  return pointer;
};

const numRegex = /\d/g;
const set = (object, paths, value) => {
  let pointer = object;
  const items = splitObjectPath(paths);
  const size = items.length;
  for (let i = 0; i < size - 1; i++) {
    const item = items[i];
    const nextItem = items[i + 1];
    if (numRegex.test(nextItem)) {
      if (!isArray(pointer[item])) pointer[item] = [];
    } else {
      if (!isObject(pointer[item])) pointer[item] = {};
    }
    pointer = pointer[item];
  }
  pointer[items[size - 1]] = value;
};

const has = (object, paths) => {
  let pointer = object;
  const splited = splitObjectPath(paths);
  const size = splited.length;
  for (let i = 0; i < size - 1; i++) {
    const item = splited[i];
    if (!isObject(pointer)) return false;
    pointer = pointer[item];
  }
  if (!isObject(pointer)) return false;
  return splited[size - 1] in pointer;
};

const keys = (object) => {
  return Object.keys(object);
};

const values = (object) => {
  return Object.values(object);
};

const valuesIn = (object) => {
  return (
    /** @type {T[]} */
    keysIn(object).map((key) => object[key])
  );
};

const entries = (object) => {
  return keys(object).map((key) => {
    const value = object[key];
    return [value, key];
  });
};

const entriesIn = (object) => {
  return keysIn(object).map((key) => {
    const value = object[key];
    return [value, key];
  });
};

const findKey = (object, predicate) => {
  const keyList = keys(object);
  for (const key of keyList) {
    if (predicate(object[key])) return key;
  }
};

const findLastKey = (object, predicate) => {
  const keyList = keys(object);
  const size = keyList.length;
  for (let i = size - 1; i >= 0; i--) {
    const key = keyList[i];
    if (predicate(object[key])) return key;
  }
};

const omit = (object, ...keys) => {
  return keys.reduce(
    (results, key) => {
      const { [key]: _, ...ele } = results;
      return ele;
    },
    { ...object }
  );
};

const pick = (object, ...keys) => {
  return keys.reduce((results, key) => {
    results[key] = object[key];
    return results;
  }, {});
};

function every(collection, predicate) {
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (!predicate(collection[i], i, collection)) return false;
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      if (!predicate(collection[key], key, collection)) return false;
    }
  }
  return true;
}

function filter(collection, predicate) {
  const results = [];
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) results.push(collection[i]);
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      if (predicate(collection[key], key, collection))
        results.push(collection[key]);
    }
  }
  return results;
}

function find(collection, predicate) {
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) return collection[i];
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      if (predicate(collection[key], key, collection)) return collection[key];
    }
  }
  return void 0;
}

function forEach(collection, callback) {
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      callback(collection[key], key, collection);
    }
  }
}

function forEachRight(collection, callback) {
  if (isArrayLike(collection)) {
    for (let i = collection.length - 1; i >= 0; i -= 1) {
      callback(collection[i], i, collection);
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (let i = keyList.length - 1; i >= 0; i -= 1) {
      const key = keyList[i];
      callback(collection[key], key, collection);
    }
  }
}

function groupBy(collection, callback) {
  const resulst = {};
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      const groupKey = callback(collection[i], i, collection);
      if (!has(resulst, groupKey)) resulst[groupKey] = [collection[i]];
      else resulst[groupKey].push(collection[i]);
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      const groupKey = callback(collection[key], key, collection);
      if (!has(resulst, groupKey)) resulst[groupKey] = [collection[key]];
      else resulst[groupKey].push(collection[key]);
    }
  }
  return resulst;
}

function map(collection, callback) {
  const resulst = [];
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      resulst.push(callback(collection[i], i, collection));
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      resulst.push(callback(collection[key], key, collection));
    }
  }
  return resulst;
}

function reduce(collection, reducer, accumulator) {
  let results = accumulator;
  if (isArrayLike(collection)) {
    if (isUndefined(results)) results = collection[0];
    for (let i = 0; i < collection.length; i++) {
      results = reducer(results, collection[i], i, collection);
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    if (isUndefined(results)) results = collection[keyList[0]];
    for (const key of keyList) {
      results = reducer(results, collection[key], key, collection);
    }
  }
  return results;
}

function reduceRight(collection, reducer, accumulator) {
  let results = accumulator;
  if (isArrayLike(collection)) {
    const size = collection.length;
    if (isUndefined(results)) results = collection[size - 1];
    for (let i = size - 1; i >= 0; i -= 1) {
      results = reducer(results, collection[i], i, collection);
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    const size = keyList.length;
    if (isUndefined(results)) results = collection[keyList[size - 1]];
    for (let i = size - 1; i >= 0; i -= 1) {
      const key = keyList[i];
      results = reducer(results, collection[key], key, collection);
    }
  }
  return results;
}

function some(collection, predicate) {
  if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) return true;
    }
  } else if (isObject(collection)) {
    const keyList = keys(collection);
    for (const key of keyList) {
      if (predicate(collection[key], key, collection)) return true;
    }
  }
  return false;
}

function difference(array, ...other) {
  let o = [];
  let transformer = (v) => v;
  const lastItem = other.at(-1);
  if (isFunction(lastItem)) {
    transformer = lastItem;
    o = other.slice(0, -1).flat();
  } else o = other.flat();
  const comapre = map(o, transformer);
  return filter(
    array,
    (value, index) => !comapre.includes(transformer(value, index))
  );
}

function intersection(array, ...other) {
  let transformer = (v) => v;
  const lastItem = other.at(-1);
  let o = other;
  if (isFunction(lastItem)) {
    transformer = lastItem;
    o = other.slice(0, -1);
  }
  return filter(array, (value, index) => {
    const converted = transformer(value, index);
    return o.every((arr) =>
      some(arr, (item, i) => transformer(item, i) == converted)
    );
  });
}

function range(...args) {
  const arr = [];
  let std, end;
  if (args.length !== 1) {
    std = args[0];
    end = std + args[1];
  } else (std = 0), (end = args[0]);
  for (let i = std; i < end; i++) arr.push(i);
  return arr;
}

const shuffle = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

function find$(selector, element) {
  const $el = isElement(element) ? element : document;
  return $el.querySelector(selector);
}

function findAll$(selector, element) {
  const $el = isElement(element) ? element : document;
  return $el.querySelectorAll(selector);
}

const on = (element, eventType, listener, options) =>
  element.addEventListener(eventType, listener, options);

const off = (element, eventType, listener) =>
  element.removeEventListener(eventType, listener);

function bind$($element, eventType, selector, listener, condition) {
  const children = Array.from(findAll$(selector, $element));
  let EvtClass;
  const findCurrentTarget = (target) => {
    const $el = target == null ? void 0 : target.closest(selector);
    if (!$el) children.includes(target) ? target : null;
    return $el;
  };
  on($element, eventType, (event) => {
    if (!EvtClass) {
      if (eventType === 'wheel') EvtClass = WheelEvent;
      else if (tagType(event) === 'PointerEvent') EvtClass = PointerEvent;
      else EvtClass = MouseEvent;
    }
    const $currentTarget = findCurrentTarget(event.target);
    if (!$currentTarget) return false;
    if (typeof condition === 'function' && !condition($element, $currentTarget))
      return false;
    const e = new EvtClass(eventType, event);
    ['target', 'currentTarget'].forEach((item) =>
      Object.defineProperty(e, item, {
        value: $currentTarget,
        configurable: true,
      })
    );
    listener.call($currentTarget, e);
  });
}

function create$(tagName, options = {}) {
  const $el = document.createElement(tagName);
  const { id, className, classList, role, style, dataset, ...props } = options;
  if (id) $el.id = id;
  if (className) $el.classList.add(className);
  if (Array.isArray(classList)) $el.classList.add(...classList);
  if (role) $el.role = role;
  if (style && tagType(style) === 'Object') {
    for (const key in style) {
      const value = style[key];
      if (value === void 0) continue;
      $el.style[key] = value;
    }
  }
  if (tagType(dataset) === 'Object') {
    for (const key in dataset) {
      const value = dataset[key];
      if (value === void 0) continue;
      $el.dataset[key] = `${value}`;
    }
  }
  if (tagType(dataset) === 'Object') {
    for (const key in props) {
      const value = props[key];
      if (value === void 0) continue;
      $el[key] = value;
    }
  }
  return $el;
}

function debounce(func, wait, immediate = false) {
  let timeout = null;
  let result;
  let args;
  const later = () => {
    timeout = null;
    if (!immediate) {
      result = func(...args);
    }
    if (!timeout) args = null;
  };
  const debounced = assign(
    (...params) => {
      args = params;
      const callNow = immediate && !timeout;
      if (timeout) clearTimeout(timeout);
      timeout = window.setTimeout(later, wait);
      if (callNow) {
        result = func(...args);
      }
      return result;
    },
    {
      cancel: () => {
        if (timeout) clearTimeout(timeout);
        timeout = null;
      },
    }
  );
  return debounced;
}

const sleep = (wait) => new Promise((resolve) => setTimeout(resolve, wait));

const now = () => /* @__PURE__ */ new Date().getTime();
function throttle(func, wait, options = {}) {
  let timeout;
  let result;
  let args;
  let previous = 0;
  if (!options) options = {};
  const later = () => {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func(...args);
    if (!timeout) args = null;
  };
  const throttled = assign(
    (...params) => {
      const _now = now();
      if (!previous && options.leading === false) previous = _now;
      const remaining = wait - (_now - previous);
      args = params;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = _now;
        result = func(...args);
        if (!timeout) args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    },
    {
      cancel: () => {
        if (timeout) clearTimeout(timeout);
        previous = 0;
        timeout = args = null;
      },
    }
  );
  return throttled;
}

function sum(values) {
  return reduce(values, (sum2, value) => sum2 + value, 0);
}

function average(values) {
  const size = values.length;
  if (size === 0) return 0;
  return sum(values) / size;
}

function between(number, start, end) {
  return number >= start && number <= end;
}

function clamp(number, lower, upper) {
  return number < lower ? lower : number > upper ? upper : number;
}

function camelCase(str = '') {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

function kebabCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase();
}

function pascalCase(str) {
  const camel = camelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function snakeCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('_')
    .toLowerCase();
}

export {
  assign,
  assignIn,
  average,
  between,
  bind$,
  camelCase,
  capitalize,
  chunk,
  clamp,
  create$,
  debounce,
  difference,
  entries,
  entriesIn,
  every,
  filter,
  find,
  find$,
  findAll$,
  findKey,
  findLastKey,
  forEach,
  forEachRight,
  get,
  groupBy,
  has,
  intersection,
  is,
  isArray,
  isArrayLike,
  isBlank,
  isBoolean,
  isDate,
  isDateLike,
  isElement,
  isEmpty,
  isEqual,
  isError,
  isFunction,
  isMap,
  isNull,
  isNullish,
  isNumber,
  isObject,
  isPlainObject,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  isWeakMap,
  isWeakSet,
  kebabCase,
  keys,
  keysIn,
  map,
  off,
  omit,
  on,
  pascalCase,
  pick,
  range,
  reduce,
  reduceRight,
  set,
  shuffle,
  sleep,
  snakeCase,
  some,
  sum,
  tagType,
  throttle,
  values,
  valuesIn,
};
