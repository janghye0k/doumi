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
const pick = <T extends object, K extends keyof T>(
  object: T,
  ...keys: K[]
): Pick<T, K> => {
  return keys.reduce((results, key) => {
    results[key] = object[key];
    return results;
  }, {} as any);
};

export default pick;
