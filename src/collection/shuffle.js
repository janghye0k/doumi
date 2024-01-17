/**
 * Creates an array of shuffled values, using knuth shuffle
 * @template T
 * @param {T[]} array The array to query
 * @returns {T[]} Returns the new shuffled array.
 */
const shuffle = (array) => {
  const size = array.length;

  let pointer;
  const results = Array.from(array);
  for (let i = size - 1; i >= 0; i--) {
    const random = Math.round(Math.random() * (size - i - 1));
    pointer = results[i];
    results[i] = results[random];
    results[random] = pointer;
  }
  return results;
};

export default shuffle;
