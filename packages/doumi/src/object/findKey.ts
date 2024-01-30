import keys from './keys';

/**
 * Returns the key of the first element predicate
 * @since 0.1.0
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
const findKey = <T extends object>(
  object: T,
  predicate: (value: any) => boolean
): string | undefined => {
  const keyList = keys(object);
  for (const key of keyList) {
    if (predicate((object as any)[key])) return key;
  }
};

export default findKey;
