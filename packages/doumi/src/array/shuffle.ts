/**
 * Creates an array of shuffled values, using knuth shuffle
 * @template T
 * @param {T[]} array The array to query
 * @returns {T[]} Returns the new shuffled array.
 */
const shuffle = <T>(array: T[]): T[] => {
  return array.sort(() => 0.5 - Math.random());
};

export default shuffle;
