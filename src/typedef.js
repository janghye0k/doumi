/**
 * @template T
 * @typedef {{ [index: number]: T; length: number, [property: string | symbol]: any }} ArrayLike
 */

/**
 * @template T
 * @typedef {{ [key: string]: T }} Dictionary
 */

/**
 * @template T
 * @typedef {ArrayLike<T> | Dictionary<T>} Collection
 */

export {};
