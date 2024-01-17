import * as lang from './lang';
import * as dom from './dom';
import * as object from './object';
import * as collection from './collection';
import * as array from './array';

const doumi = { ...lang, ...dom, ...object, ...collection, ...array };

export default doumi;

/**
 * @template T
 * @typedef {{ [index: number]: T; length: number}} ArrayLike
 */

/**
 * @template T
 * @typedef {{ [key: string]: T }} Dictionary
 */

/**
 * @template T
 * @typedef {ArrayLike<T> | Dictionary<T>} Collection
 */

/**
 * @template T
 * @typedef {T extends ArrayLike<infer U> ? U : T} ArrayLikeValue
 */

/**
 * @template T
 * @typedef {T extends Dictionary<infer U> ? U : T} DictionaryValue
 */

/**
 * @template T
 * @typedef {T extends ArrayLike<infer U> ? U : T extends Dictionary<infer U> ? U : never} CollectionValue
 */
