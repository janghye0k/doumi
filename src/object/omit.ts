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
const omit = <T extends object, K extends keyof T>(
  object: T,
  ...keys: K[]
): Omit<T, K> => {
  return keys.reduce(
    (results, key) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [key]: _, ...ele } = results;
      return ele;
    },
    { ...object } as any
  );
};

export default omit;
