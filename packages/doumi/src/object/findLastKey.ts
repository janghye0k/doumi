import keys from './keys';

/**
 * Returns the key of the last element predicate
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
 * findKey(obj, (o) => 'class' in o) // 'smith'
 * findKey(obj, (o) => o.class === 3) // 'anna'
 */
const findLastKey = <T extends object>(
  object: T,
  predicate: (value: any) => boolean
): string | undefined => {
  const keyList = keys(object);
  const size = keyList.length;
  for (let i = size - 1; i >= 0; i--) {
    const key = keyList[i];
    if (predicate((object as any)[key])) return key;
  }
};

export default findLastKey;
