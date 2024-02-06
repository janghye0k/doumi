import { isArray, isBoolean, isNumber, isSymbol } from '../../lang';

function isKey(value: any) {
  if (isArray(value)) return false;
  if (isNumber(value) || isSymbol(value) || isBoolean(value)) return true;
  return /^\w*$/.test(value);
}

const bracketReg = new RegExp(
  String.raw`[^.[\]]+|\[(?:\-\d+|\d+|\".*\"|\'.*\')\]`,
  'gi'
);

export function splitObjectPath(paths: string): string[] {
  if (isKey(paths)) return [paths];
  const results: any[] = [];
  let str = paths;
  while (str.at(0) === '.') {
    results.push('');
    str = str.slice(1);
  }

  str.replace(bracketReg, (match) => {
    if (match.startsWith('["') || match.startsWith("['")) {
      results.push(match.slice(2, -2));
    } else if (match.startsWith('[')) {
      results.push(match.slice(1, -1));
    } else results.push(match);
    return '';
  });

  return results;
}

const numRegex = /^(\d+|-\d+)$/;

export const isIndex = (value: any) =>
  numRegex.test(value) && Number.isInteger(Number(value));
