/**
 * A function to create numbered lists of integers,
 * @param size The size of array
 * @param start The start index of array, if `arguments.length === 0`, array started at 0 index
 * @returns {number[]} Returns `size` length array, started at `start`
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
