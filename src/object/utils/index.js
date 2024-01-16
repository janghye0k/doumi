/**
 * @param {string} paths
 * @returns {string[]}
 */
export function splitObjectPath(paths) {
  const results = [];
  const splitByDot = paths.split('.');
  for (const splited of splitByDot) {
    if (!splited?.length) continue;
    results.push(...splited.split(/\[(.*?)\]/g).filter((item) => item?.length));
  }
  return results;
}
