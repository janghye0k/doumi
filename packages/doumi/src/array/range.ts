/**
 * A function to create numbered lists of integers,
 * @since 0.1.0
 * @param {number} start The start value of array, if `arguments.length === 0`, array started at 0 value
 * @param {number} size The size of array
 * @returns {number[]} Returns `size` length array, started at `start`
 * @example
 *
 * range(5) // [0, 1, 2, 3, 4]
 * range(3, 4) // [3, 4, 5, 6]
 */
function range(size: number): number[];
function range(start: number, size: number): number[];
function range(...args: [number] | [number, number]): number[] {
  const arr = [];
  let std, end;
  if (args.length !== 1) {
    std = args[0];
    end = std + args[1];
  } else (std = 0), (end = args[0]);
  for (let i = std; i < end; i++) arr.push(i);
  return arr;
}

export default range;
